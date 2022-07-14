import { useEffect, useState } from "react";
import EditUserForm from "../components/forms/EditUserForm";
import { TOKEN, USER_LOGIN } from '../util/constants/settingSystem';
import ReactHtmlParser from 'react-html-parser';
import {useHistory} from 'react-router-dom'
import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Upload,
  message,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import BgProfile from "../assets/images/bg-signup.jpg";
import convesionImg from "../assets/images/face-3.jpg";
import convesionImg2 from "../assets/images/face-4.jpg";
import convesionImg3 from "../assets/images/face-5.jpeg";
import convesionImg4 from "../assets/images/face-6.jpeg";
import convesionImg5 from "../assets/images/face-2.jpg";
import project1 from "../assets/images/home-decor-1.jpeg";
import project2 from "../assets/images/home-decor-2.jpeg";
import project3 from "../assets/images/home-decor-3.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getFormUpdateUser, getUserInfoSaga } from "../redux/actions/UserActions/UserActions";
import dateFormat, { masks } from "dateformat";
import { getChangePasswordFormAction } from "../redux/actions/DrawerActions/DrawerActions";
import ChangePasswordForm from "../components/forms/ChangePasswordForm";

export default function Profile() {
  const dispatch = useDispatch();
  const UserInfo = useSelector((state) => state.UserReducer.UserInfo);

  const history = useHistory();

  const userName = JSON.parse(localStorage.getItem(USER_LOGIN)).userName;
  useEffect(() => {
    dispatch(getUserInfoSaga(userName));
  }, []);
  //mask date time
  const createTime = dateFormat(Date(UserInfo.createTime), "dd/mm/yyyy");

  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];
  return (
    <>


      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={UserInfo.avatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">{UserInfo.userName}</h4>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
            </Col>
          </Row>
        }
      ></Card>

      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Giới Thiệu</h6>}
            className="header-solid h-full card-profile-information"
            extra={<Button onClick={() => { dispatch(getFormUpdateUser("Sửa thông tin", <EditUserForm />)); }} type="link">{pencil}</Button>}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              {" "}
              {ReactHtmlParser(UserInfo.userDetail)}
              {" "}
            </p>
            <hr className="my-25" />
            <Descriptions title="Thông Tin Cá Nhân">
              <Descriptions.Item label="Tên" span={3}>
                {UserInfo.fullName}
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại" span={3}>
                {UserInfo.phoneNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Ngày tạo" span={3}>
                {createTime}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">Chức năng</h6>}
            className="header-solid h-full card-profile-information"
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <Button type="primary" icon={<EditOutlined />}
              onClick={() => { dispatch(getChangePasswordFormAction(`Đổi mật khẩu tài khoản ${UserInfo.userName}`, <ChangePasswordForm />)) }}>
              Đổi mật khẩu
            </Button>
            <Button type="default" className="bg-danger mx-1" icon={<LogoutOutlined />}
              onClick={() => {
                history.push('sign-in');
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
              }}>
              Đăng xuất
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

