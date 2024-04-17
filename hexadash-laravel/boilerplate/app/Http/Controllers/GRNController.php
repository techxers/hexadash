<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\Customer;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use App\Models\GRNMain;
class GrnController extends Controller
{

    /**
     * Display view all users of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $per_page = session( 'pagination_per_page' );
        $per_page = ( ! empty( $per_page ) ) ? $per_page : 20;
        $page     = ( ! empty( $_GET['page'] ) ) ? $_GET['page'] : 1;
        $offset   = ( $page * $per_page ) - $per_page;

        $customers   = Customer::orderBy('id', 'DESC')->paginate( $per_page );
        $title       = "Customer List";
        $description = "Some description for the page";

        return view('customer.list', compact('title', 'description', 'customers'));
    }

    /**
     * Display create users of the resource.
     *
     * @return \Illuminate\View\View
     */
    public function create(Request $request)
    {
            $validatedData = $request->validate([
                'grn_no' => 'required|max:255',
                'grower_id' => 'required',
                'season_id' => 'required',
                'gross_weight' => 'required|numeric',
                'net_weight' => 'required|numeric',
                'tare_weight' => 'required|numeric',
                'clean_type' => 'required',
                'warehouse_id' => 'required',
                'warehouse_manager_id' => 'required',
                'supervisor_id' => 'required',
                'miller_id' => 'required',
                'is_verified' => 'required',
                'date_received' => 'required|date',
                'vehicle_no' => 'required|max:255',
                'weight_bridge' => 'required|max:255',
                'driver_name' => 'required|max:255',
                'driver_id' => 'required|max:255',
                'permit_no' => 'required|max:255',
            ]);
    
            $grn = new GRNMain;
            $grn->grnNo = $validatedData['grn_no'];
            $grn->GrowerID = $validatedData['grower_id'];
            $grn->SeasonID = $validatedData['season_id'];
            $grn->GrossWeight = $validatedData['gross_weight'];
            $grn->NetWeight = $validatedData['net_weight'];
            $grn->TareWeight = $validatedData['tare_weight'];
            $grn->CoffeeTypeId = $validatedData['clean_type'];
            $grn->WarehouseID = $validatedData['warehouse_id'];
            $grn->WHManager = $validatedData['warehouse_manager_id'];
            $grn->SupervisorID = $validatedData['supervisor_id'];
            $grn->MillerID = $validatedData['miller_id'];
            $grn->IsVerified = $validatedData['is_verified'];
            $grn->DeliveryDate = $validatedData['date_received'];
            $grn->VehiclePlate = $validatedData['vehicle_no'];
            $grn->WeighBridgeNo = $validatedData['weight_bridge'];
            $grn->DriverName = $validatedData['driver_name'];
            $grn->DriverIDNo = $validatedData['driver_id'];
            $gprn->PermitNo = $validatedData['permit_no'];
            $grn->documentSerial = $validatedData['date_received'];

            $result = $grn->save();
            $success = 'GRN created successfully !';
            if($result){
                return redirect()->back()->with('Success', $success);
            }else{
                return redirect()->back()->with('error', $result->getMessage());
            }

    }

    public function search(Request $request){

        $validatedData = $request->validate([
            'grn_no' => 'required|max:255',
            'season_id' => 'required'
        ]);
        //implement search
        $grn = GRNMain::where('grnNo',$validatedData['grn_no'])->where('SeasonID',$validatedData['season_id'])->first();
        if($grn){
            return redirect()->back()->with('grn',$grn);
        }else{
            return redirect()->back()->with('error','GRN not found');
        }

        
    }

    /**
     * Store a newly created customer resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $validators = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:customers',
            'phone' => 'required|numeric|unique:customers',
            'gender' => 'required',
            'profession' => 'required'
        ]);

        if ($validators->fails()) {
            return redirect()->route('customer.create', app()->getLocale())->withErrors($validators)->withInput();
        } else {
            $customer = new Customer();

            if ( $request->hasFile('profile-picture') && $request->file('profile-picture')->isValid() ) {
                $profile_picture = $request->file('profile-picture')->store('public');
                $customer->profile_picture = $profile_picture;
            }

            $customer->name       = $request->name;
            $customer->email      = $request->email;
            $customer->phone      = $request->phone;
            $customer->gender     = $request->gender;
            $customer->profession = $request->profession;
            $customer->address    = $request->address;
            $customer->status     = $request->status;

            $customer->save();

            return redirect()->route('customer.list', app()->getLocale())->with('create', 'Customer created successfully !');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function edit($language, $id)
    {
        $title         = 'Edit Customer';
        $description   = 'Some description for the page';
        $find_customer = Customer::where('id', $id)->get();

        return view('customer.edit', compact('title', 'description', 'find_customer'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $language, $id)
    {
        $validators = Validator::make($request->all(), [
            'name' => 'required',
            'email' => ['required', 'email', Rule::unique('customers')->ignore($id)],
            'phone' => ['required', 'numeric', Rule::unique('customers')->ignore($id)],
            'gender' => 'required',
            'profession' => 'required'
        ]);

        if ($validators->fails()) {
            return redirect()->route('customer.edit', [app()->getLocale(), $id])->withErrors($validators)->withInput();
        } else {
            $customer = Customer::findOrFail($id);

            if ( $request->hasFile('profile-picture') && $request->file('profile-picture')->isValid() ) {
                $profile_picture = $request->file('profile-picture')->store('public');
                $customer->profile_picture = $profile_picture;
            }

            if ( $request->has('remove_profile_picture') && ! empty( $request->remove_profile_picture ) ) {
                Storage::delete( $customer->profile_picture );
                $customer->profile_picture = '';
            }

            $customer->name       = $request->name;
            $customer->email      = $request->email;
            $customer->phone      = $request->phone;
            $customer->gender     = $request->gender;
            $customer->profession = $request->profession;
            $customer->address    = $request->address;
            $customer->status     = $request->status;

            $customer->save();

            return redirect()->route('customer.list', app()->getLocale())->with('update', 'Customer updated successfully !');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function delete($language, $id)
    {
        $find_customer = Customer::findOrFail($id);
        $find_customer->delete();
        return redirect()->route('customer.list', app()->getLocale())->with('delete', 'Customer deleted successfully !');
    }
}