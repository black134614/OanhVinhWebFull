import { useState } from "react";
import EditUserForm from "../components/forms/EditUserForm";

import { useEffect, useState } from "react";
import EditUserForm from "../components/forms/EditUserForm";
import { USER_LOGIN } from '../util/constants/settingSystem'
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
} from "@ant-design/icons";

import BgProfile from "../assets/images/bg-signup.jpg";
import profilavatar from "../assets/images/face-1.jpg";
import convesionImg from "../assets/images/face-3.jpg";
import convesionImg2 from "../assets/images/face-4.jpg";
import convesionImg3 from "../assets/images/face-5.jpeg";
import convesionImg4 from "../assets/images/face-6.jpeg";
import convesionImg5 from "../assets/images/face-2.jpg";
import project1 from "../assets/images/home-decor-1.jpeg";
import project2 from "../assets/images/home-decor-2.jpeg";
import project3 from "../assets/images/home-decor-3.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getFormUpdateUser } from "../redux/actions/UserActions/UserActions";
import { useDispatch } from "react-redux";
import { getFormUpdateUser } from "../redux/actions/UserActions/UserActions";

function Profile() {
  const dispatch = useDispatch();
  
  const userInfo = JSON.parse(localStorage.getItem(USER_LOGIN));

  useEffect(() => {
    console.log(userInfo);
  }, []);

  const showDrawer = () => {
    dispatch(getFormUpdateUser("Sửa thông tin", <EditUserForm />));
  };

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
  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>Upload New Project</div>
    </div>
  );

  const data = [
    {
      title: "Sophie B.",
      avatar: convesionImg,
      description: "Hi! I need more information…",
    },
    {
      title: "Anne Marie",
      avatar: convesionImg2,
      description: "Awesome work, can you…",
    },
    {
      title: "Ivan",
      avatar: convesionImg3,
      description: "About files I can…",
    },
    {
      title: "Peterson",
      avatar: convesionImg4,
      description: "Have a great afternoon…",
    },
    {
      title: "Nick Daniel",
      avatar: convesionImg5,
      description: "Hi! I need more information…",
    },
  ];

  const project = [
    {
      img: project1,
      titlesub: "Project #1",
      title: "Modern",
      disciption:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      img: project2,
      titlesub: "Project #2",
      title: "Scandinavian",
      disciption:
        "Music is something that every person has his or her own specific opinion about.",
    },
    {
      img: project3,
      titlesub: "Project #3",
      title: "Minimalist",
      disciption:
        "Different people have different taste, and various types of music, Zimbali Resort",
    },
  ];

  return (
    <>
      <button onClick={showDrawer}>showdrawer</button>

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
                <Avatar size={74} shape="square" src={profilavatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">Sarah Jacob</h4>
                  <p>CEO / Co-Founder</p>
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
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">OVERVIEW</Radio.Button>
                <Radio.Button value="b">TEAMS</Radio.Button>
                <Radio.Button value="c">PROJECTS</Radio.Button>
              </Radio.Group>
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
            extra={<Button type="link">{pencil}</Button>}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              {" "}
              Tôi đã theo học và tốt nghiệp loại giỏi chuyên ngành Kế toán của Đại học Kinh tế Quốc dân. Trong quá trình học tập tại trường, tôi đã từng giành giải Nhất cuộc thi “The Audit Race 2019” do tập đoàn FAC tổ chức. Tôi có nhiều kinh nghiệm làm việc với công ty xuất khẩu: Công ty CPTM HBS Vietnam; Công ty Xuất nhập khẩu Trung Quốc Đại Dương.
              {" "}
            </p>
            <hr className="my-25" />
            <Descriptions title="Thông Tin Cá Nhân">
              <Descriptions.Item label="Tên" span={3}>
                Sarah Emily Jacob
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại" span={3}>
                (44) 123 1234 123
              </Descriptions.Item>
              <Descriptions.Item label="Ngày tạo" span={3}>
                sarahjacob@mail.com
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Profile;
