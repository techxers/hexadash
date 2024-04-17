import app from '../../config/configApp';
import {
  Button,
  Menu,
  Dropdown,
  Drawer,
  Select,
  Skeleton,
  Spin,
  Statistic,
  Slider,
  InputNumber,
  Form,
  Cascader,
  Popconfirm,
  Empty,
  Progress,
  Pagination,
  Modal,
  Divider,
  Space,
  List,
  Comment,
  Tooltip,
  Collapse,
  Checkbox,
  Radio,
  Layout,
  PageHeader,
  Card,
  Carousel,
  Calendar,
  Switch,
  Icon,
  Avatar,
  Row,
  Col,
  DatePicker,
  TimePicker,
  Timeline,
  Input,
  AutoComplete,
  Popover,
  Badge,
  Breadcrumb,
  Rate,
  Result,
  Table,
  Upload,
  Tag,
  Steps,
  message,
  Tabs,
  Tree,
  TreeSelect,
  Alert,
} from 'ant-design-vue';

// app.prototype.$message = message;
app.config.globalProperties.$message = message;

app.use(Alert);
app.use(Rate);
app.use(Button);
app.use(Menu);
app.use(Layout);
app.use(Switch);
app.use(Progress);
app.use(Icon);
app.use(Row);
app.use(Col);
app.use(Input);
app.use(InputNumber);
app.use(AutoComplete);
app.use(Popover);
app.use(Checkbox);
app.use(Divider);
app.use(Avatar);
app.use(Dropdown);
app.use(Drawer);
app.use(Badge);
app.use(Breadcrumb);
app.use(Empty);
app.use(Skeleton);
app.use(Spin);
app.use(Statistic);
app.use(Slider);
app.use(DatePicker);
app.use(TimePicker);
app.use(Timeline);
app.use(PageHeader);
app.use(Calendar);
app.use(Card);
app.use(Carousel);
app.use(Radio);
app.use(Cascader);
app.use(Collapse);
app.use(Comment);
app.use(Tooltip);
app.use(List);
app.use(Form);
app.use(Space);
app.use(Upload);
app.use(Select);
app.use(Table);
app.use(Modal);
app.use(Pagination);
app.use(Popconfirm);
app.use(Progress);
app.use(Result);
app.use(Tag);
app.use(Steps);
app.use(Tabs);
app.use(Tree);
app.use(TreeSelect);
