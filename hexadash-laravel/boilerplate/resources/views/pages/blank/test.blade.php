@section('title',$title)
@section('description',$description)
@extends('layout.app')
@section('content')
<div class="dm-page-content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">

                <div class="breadcrumb-main">
                    <h4 class="text-capitalize breadcrumb-title">{{ trans('menu.ui-collapse') }}</h4>
                    <div class="breadcrumb-action justify-content-center flex-wrap">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><i class="las la-home"></i>Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{ trans('menu.ui-collapse') }}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

            </div>
            <div class="col-lg-12">
                <div class="card card-default card-md mb-4">
                    <div class="card-header py-20">
                        <div class="card-body">
                            <div class="container">
                                <div class="col-lg-12 mb-xl-50 mb-30">
                                    <div class="row justify-content-left">
                                        <div class="col-md-8">
                                            <div class="search-style-2 global-shadow ">
                                                <form action="/" class="d-flex align-items-center">
                                                    <div class="job-search">
                                                        <img src="{{ asset('assets/img/svg/search.svg') }}" alt="search"
                                                            class="svg">
                                                        <input class="form-control border-0 box-shadow-none"
                                                            type="search" placeholder="Select Outturn"
                                                            aria-label="Search">
                                                    </div>
                                                    <div class="location-search">
                                                        <div class="form-group">
                                                            <select
                                                                class="js-example-basic-single js-states form-control"
                                                                id="countryOption">
                                                                <option>2020/2021</option>
                                                                <option>2021/2022</option>
                                                                <option>2023/2024</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <button class="btn btn-primary"><img
                                                            src="{{ asset('assets/img/svg/search.svg') }}" alt="search"
                                                            class="svg">search</button>
                                                </form>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">


                        <div class="dm-collapse dm-collapse-custom">

                            <div class="dm-collapse-item">
                                <div class="dm-collapse-item__header active">
                                    <a href="#" class="item-link" data-bs-toggle="collapse"
                                        data-bs-target="#collapse-body-c-1" aria-expanded="true">

                                        <i class="la la-angle-right"></i>

                                        <h6>This is panel header 1</h6>
                                    </a>
                                </div>
                                <div id="collapse-body-c-1" class="collapse dm-collapse-item__body show">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="card card-default card-md mb-4">
                                                <div class="card-header">
                                                    <h6>Form Group in Grid</h6>
                                                </div>
                                                <div class="card-body py-md-25">
                                                    <form action="#">
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a1"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">GRN
                                                                        NO</label>
                                                                    <input type="text"
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a1" placeholder="GRN No">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a2"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Grower</label>
                                                                    <div class="form-group">
                                                                        <label for="a3"
                                                                            class="il-gray fs-14 fw-500 align-center mb-10">Grower</label>
                                                                        <select
                                                                            class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                            id="a3">
                                                                            <option value="">Select an option</option>
                                                                            @foreach($growers as $grower)
                                                                            <option value="{{ $grower->GrowerName }}">
                                                                                {{ $grower->GrowerName }}</option>
                                                                            @endforeach
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a3"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Season</label>
                                                                    <select
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a3">
                                                                        <option value="">Select an option</option>
                                                                        <option value="option1">Option 1</option>
                                                                        <option value="option2">Option 2</option>
                                                                        <option value="option3">Option 3</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a1"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Gross
                                                                        Weight</label>
                                                                    <input type="text"
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a1" placeholder="Gross Weight">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a2"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Net
                                                                        Weight</label>
                                                                    <input type="text"
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a2" placeholder="Net Weight">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a3"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Tare
                                                                        Weight</label>
                                                                    <input type="text"
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a3" placeholder="Tare Weight">
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a1"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Coffee
                                                                        Type</label>
                                                                    <select
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a1">
                                                                        <option value="">Select One of Three Columns
                                                                        </option>
                                                                        <option value="option1">Option 1</option>
                                                                        <option value="option2">Option 2</option>
                                                                        <option value="option3">Option 3</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a2"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Warehouse
                                                                    </label>
                                                                    <select
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a2">
                                                                        <option value="">Select One of Three Columns
                                                                        </option>
                                                                        <option value="option1">Option 1</option>
                                                                        <option value="option2">Option 2</option>
                                                                        <option value="option3">Option 3</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a3"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">WH
                                                                        manager</label>
                                                                    <select
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a3">
                                                                        <option value="">Select One of Three Columns
                                                                        </option>
                                                                        <option value="option1">Option 1</option>
                                                                        <option value="option2">Option 2</option>
                                                                        <option value="option3">Option 3</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a1"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Supervisor</label>
                                                                    <input type="text"
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a1" placeholder="One of Three Columns">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label for="a2"
                                                                        class="il-gray fs-14 fw-500 align-center mb-10">Miller</label>
                                                                    <input type="text"
                                                                        class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                        id="a2" placeholder="One of Three Columns">
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label for="a3"
                                                                    class="il-gray fs-14 fw-500 align-center mb-10"
                                                                    style="font-weight: bold;">WH manager</label>
                                                                <select
                                                                    class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                    id="a3">
                                                                    <option value="">Select One of Three Columns
                                                                    </option>
                                                                    <option value="option1">Option 1</option>
                                                                    <option value="option2">Option 2</option>
                                                                    <option value="option3">Option 3</option>
                                                                </select>
                                                                <label for="a3"
                                                                    class="il-gray fs-14 fw-500 align-center mb-10">Is
                                                                    Verified</label>
                                                                <input type="checkbox"
                                                                    class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                    id="a3" value="One of Three Columns">
                                                            </div>
                                                        </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="a1"
                                                                class="il-gray fs-14 fw-500 align-center mb-10">Date
                                                                Received</label>
                                                            <input type="text"
                                                                class="form-control ih-medium ip-light radius-xs b-light px-15 datepicker"
                                                                id="a1" placeholder="One of Three Columns">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="a2"
                                                                class="il-gray fs-14 fw-500 align-center mb-10">Vehicle
                                                                Registration</label>
                                                            <input type="text"
                                                                class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                id="a2" placeholder="One of Three Columns">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="a3"
                                                                class="il-gray fs-14 fw-500 align-center mb-10">Weight
                                                                Bridge</label>
                                                            <input type="text"
                                                                class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                id="a3" placeholder="One of Three Columns">
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="a1"
                                                                class="il-gray fs-14 fw-500 align-center mb-10">Driver
                                                                Name</label>
                                                            <input type="text"
                                                                class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                id="a1" placeholder="One of Three Columns">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="a2"
                                                                class="il-gray fs-14 fw-500 align-center mb-10">Driver
                                                                ID</label>
                                                            <input type="text"
                                                                class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                id="a2" placeholder="One of Three Columns">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="a3"
                                                                class="il-gray fs-14 fw-500 align-center mb-10">Permit
                                                                No</label>
                                                            <input type="text"
                                                                class="form-control ih-medium ip-light radius-xs b-light px-15"
                                                                id="a3" placeholder="One of Three Columns">
                                                        </div>
                                                    </div>

                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                        <!-- ends: .card -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dm-collapse-item">
                            <div class="dm-collapse-item__header">
                                <a href="#" class="item-link" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-body-c-2" aria-expanded="false">

                                    <i class="la la-angle-right"></i>

                                    <h6>This is panel header 1</h6>
                                </a>
                            </div>
                            <div id="collapse-body-c-2" class="collapse dm-collapse-item__body">
                                <div class="collapse-body-text">
                                    <div class="row">
                                        <div class="col-12 mb-30">
                                            <div class="support-ticket-system support-ticket-system--search">
                                                <div
                                                    class="breadcrumb-main m-0 breadcrumb-main--table justify-content-sm-between ">
                                                    <div
                                                        class=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
                                                        <div
                                                            class="d-flex align-items-center ticket__title justify-content-center me-md-25 mb-md-0 mb-20">
                                                            <h4 class="text-capitalize fw-500 breadcrumb-title">Data
                                                                Table</h4>
                                                        </div>
                                                    </div>
                                                    <div class="action-btn">
                                                        <a href="#" class="btn px-15 btn-primary" data-bs-toggle="modal"
                                                            data-bs-target="#new-member">
                                                            <i class="las la-plus fs-16"></i>Add New Member</a>

                                                        <!-- Modal -->
                                                        <div class="modal fade new-member " id="new-member"
                                                            role="dialog" tabindex="-1"
                                                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                            <div class="modal-dialog modal-dialog-centered">
                                                                <div class="modal-content  radius-xl">
                                                                    <div class="modal-header">
                                                                        <h6 class="modal-title fw-500"
                                                                            id="staticBackdropLabel">Create project
                                                                        </h6>
                                                                        <button type="button" class="close"
                                                                            data-bs-dismiss="modal" aria-label="Close">
                                                                            <img src="{{ asset('assets/img/svg/x.svg" alt="x"
                                                                                    class="svg">
                                                                            </button>
                                                                        </div>
                                                                        <div class="modal-body">
                                                                            <div class="new-member-modal">
                                                                                <form>
                                                                                    <div class="form-group mb-20">
                                                                                        <input type="text"
                                                                                            class="form-control"
                                                                                            placeholder="Duran Clayton">
                                                                                    </div>
                                                                                    <div class="form-group mb-20">
                                                                                        <div class="category-member">
                                                                                            <select
                                                                                                class="js-example-basic-single js-states form-control"
                                                                                                id="category-member">
                                                                                                <option value="JAN">1
                                                                                                </option>
                                                                                                <option value="FBR">2
                                                                                                </option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="form-group mb-20">
                                                                                        <textarea class="form-control"
                                                                                            id="exampleFormControlTextarea1"
                                                                                            rows="3"
                                                                                            placeholder="Project description"></textarea>
                                                                                    </div>
                                                                                    <div
                                                                                        class="form-group textarea-group">
                                                                                        <label
                                                                                            class="mb-15">status</label>
                                                                                        <div class="d-flex">
                                                                                            <div
                                                                                                class="project-task-list__left d-flex align-items-center">
                                                                                                <div
                                                                                                    class="checkbox-group d-flex me-50 pe-10">
                                                                                                    <div
                                                                                                        class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                                                                                        <input
                                                                                                            class="checkbox"
                                                                                                            type="checkbox"
                                                                                                            id="check-grp-1"
                                                                                                            checked>
                                                                                                        <label
                                                                                                            for="check-grp-1"
                                                                                                            class="fs-14 color-light strikethrough">
                                                                                                            status
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="checkbox-group d-flex me-50 pe-10">
                                                                                                    <div
                                                                                                        class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                                                                                        <input
                                                                                                            class="checkbox"
                                                                                                            type="checkbox"
                                                                                                            id="check-grp-2">
                                                                                                        <label
                                                                                                            for="check-grp-2"
                                                                                                            class="fs-14 color-light strikethrough">
                                                                                                            Deactivated
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="checkbox-group d-flex">
                                                                                                    <div
                                                                                                        class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                                                                                        <input
                                                                                                            class="checkbox"
                                                                                                            type="checkbox"
                                                                                                            id="check-grp-3">
                                                                                                        <label
                                                                                                            for="check-grp-3"
                                                                                                            class="fs-14 color-light strikethrough">
                                                                                                            bloked
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="mb-25">
                                                                                        <div class="form-group mb-10">
                                                                                            <label for="name47">project
                                                                                                member</label>
                                                                                            <input type="text"
                                                                                                class="form-control"
                                                                                                id="name47"
                                                                                                placeholder="Search members">
                                                                                        </div>
                                                                                        <ul
                                                                                            class="d-flex flex-wrap mb-20 user-group-people__parent">
                                                                                            <li>
                                                                                                
                                                                                            </li>
                                                                                            <li>
                                                                                              
                                                                                            </li>
                                                                                            <li>
                                                                                              
                                                                                            </li>
                                                                                            <li>
                                                                                          
                                                                                            </li>
                                                                                            <li>
                                                                                              
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div
                                                                                        class="d-flex new-member-calendar">
                                                                                        <div
                                                                                            class="form-group w-100 me-sm-15 form-group-calender">
                                                                                            <label
                                                                                                for="datepicker">start
                                                                                                Date</label>
                                                                                            <div
                                                                                                class="position-relative">
                                                                                                <input type="text"
                                                                                                    class="form-control"
                                                                                                    id="datepicker"
                                                                                                    placeholder="mm/dd/yyyy">
                                                                                                <a href="#">
                                                                                                    <img class="svg"
                                                                                                        src="{{ asset('assets/img/svg/chevron-right.svg"
                                                                                                        alt="chevron-right.svg"></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            class="form-group w-100 form-group-calender">
                                                                                            <label for="datepicker2">End
                                                                                                Date</label>
                                                                                            <div
                                                                                                class="position-relative">
                                                                                                <input type="text"
                                                                                                    class="form-control"
                                                                                                    id="datepicker2"
                                                                                                    placeholder="mm/dd/yyyy">
                                                                                                <a href="#">
                                                                                                    <img class="svg"
                                                                                                        src="{{ asset('assets/img/svg/chevron-right.svg"
                                                                                                        alt="chevron-right.svg"></a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        class="button-group d-flex pt-25">
                                                                                        <button
                                                                                            class="btn btn-primary btn-default btn-squared text-capitalize">add
                                                                                            grade
                                                                                        </button>
                                                                                        <button type="button"
                                                                                            class="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light"
                                                                                            data-bs-dismiss="modal">cancel</button>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Modal -->

                                                        </div>
                                                    </div>

                                                    <div
                                                        class="userDatatable userDatatable--ticket userDatatable--ticket--2 mt-1">
                                                        <div class="table-responsive">
                                                            <table class="table mb-0 table-borderless">
                                                                <thead>
                                                                    <tr class="userDatatable-header">
                                                                        <th>
                                                                            <span class="userDatatable-title">ID</span>
                                                                        </th>
                                                                        <th>
                                                                            <span
                                                                                class="userDatatable-title">User</span>
                                                                        </th>
                                                                        <th>
                                                                            <span
                                                                                class="userDatatable-title">Country</span>
                                                                        </th>
                                                                        <th>
                                                                            <span
                                                                                class="userDatatable-title">Company</span>
                                                                        </th>
                                                                        <th>
                                                                            <span
                                                                                class="userDatatable-title">Position</span>
                                                                        </th>
                                                                        <th>
                                                                            <span class="userDatatable-title">Join
                                                                                Date</span>
                                                                        </th>
                                                                        <th>
                                                                            <span
                                                                                class="userDatatable-title">Status</span>
                                                                        </th>
                                                                        <th class="actions">
                                                                            <span
                                                                                class="userDatatable-title">Actions</span>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>#01</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Kellie Marquot</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                United Street
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Business Development
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Web Developer
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                January 20, 2020
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-success  color-success userDatatable-content-status active">active</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#02</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Robert Clinton</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Japan
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Vehicle Master
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Senior Manager
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                January 20, 2020
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-warning  color-warning userDatatable-content-status active">deactivated</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#03</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Chris Joe</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                South Africa
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Business Development
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Content writer
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                July 30, 2020
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-danger  color-danger userDatatable-content-status active">blocked</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#04</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Jack Kalis</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                South Korea
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Smart Collection
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                UX/UI Designer
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                June 20, 2020
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-success  color-success userDatatable-content-status active">open</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#05</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Black Smith</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                United Kingdom
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Print Media
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Graphic Designer
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                August 20, 2020
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-success  color-success userDatatable-content-status active">open</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#06</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Aftab Ahmed</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Bangladesh
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Online Super Shop
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Marketer
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                January 15, 2021
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-success  color-success userDatatable-content-status active">open</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#07</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Daniel White</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Australia
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Business Development
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Project Manager
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                January 20, 2021
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-success  color-success userDatatable-content-status active">open</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#08</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Black Smith</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                United Kingdom
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Print Media
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Graphic Designer
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                August 20, 2020
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-success  color-success userDatatable-content-status active">open</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#09</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Aftab Ahmed</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Bangladesh
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Online Super Shop
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Marketer
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                January 15, 2021
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-success  color-success userDatatable-content-status active">open</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>#10</td>
                                                                        <td>
                                                                            <div class="d-flex">
                                                                                <div class="userDatatable-inline-title">
                                                                                    <a href="#"
                                                                                        class="text-dark fw-500">
                                                                                        <h6>Daniel White</h6>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Australia
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div class="userDatatable-content--subject">
                                                                                Business Development
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                Project Manager
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content--priority">
                                                                                January 20, 2021
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div
                                                                                class="userDatatable-content d-inline-block">
                                                                                <span
                                                                                    class="bg-opacity-success  color-success userDatatable-content-status active">open</span>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <ul
                                                                                class="orderDatatable_actions mb-0 d-flex flex-wrap">
                                                                                <li>
                                                                                    <a href="#" class="view">
                                                                                        <i class="uil uil-setting"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="edit">
                                                                                        <i class="uil uil-edit"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" class="remove">
                                                                                        <i
                                                                                            class="uil uil-trash-alt"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="d-flex justify-content-end pt-30">
                                                            <nav class="dm-page ">
                                                                <ul class="dm-pagination d-flex">
                                                                    <li class="dm-pagination__item">
                                                                        <a href="#"
                                                                            class="dm-pagination__link pagination-control"><span
                                                                                class="la la-angle-left"></span></a>
                                                                        <a href="#" class="dm-pagination__link"><span
                                                                                class="page-number">1</span></a>
                                                                        <a href="#"
                                                                            class="dm-pagination__link active"><span
                                                                                class="page-number">2</span></a>
                                                                        <a href="#" class="dm-pagination__link"><span
                                                                                class="page-number">3</span></a>
                                                                        <a href="#"
                                                                            class="dm-pagination__link pagination-control"><span
                                                                                class="page-number">...</span></a>
                                                                        <a href="#" class="dm-pagination__link"><span
                                                                                class="page-number">12</span></a>
                                                                        <a href="#"
                                                                            class="dm-pagination__link pagination-control"><span
                                                                                class="la la-angle-right"></span></a>
                                                                        <a href="#" class="dm-pagination__option">
                                                                        </a>
                                                                    </li>
                                                                    <li class="dm-pagination__item">
                                                                        <div class="paging-option">
                                                                            <select name="page-number"
                                                                                class="page-selection">
                                                                                <option value="20">20/page</option>
                                                                                <option value="40">40/page</option>
                                                                                <option value="60">60/page</option>
                                                                            </select>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <!-- ends: .card -->
            </div>
            <!-- ends: .col-12 -->
        </div>
    </div>
</div>
@endsection