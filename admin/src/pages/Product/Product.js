import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Popconfirm, Popover, Table } from 'antd';
import dateFormat, { masks } from "dateformat";
import {
    Row,
    Col,
    Card,
    Statistic,
    Button,
    List,
    Descriptions,
    Avatar,
} from "antd";

import { PlusOutlined, ExclamationOutlined, DeleteOutlined, EditOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import mastercard from "../../assets/images/mastercard-logo.png";
import paypal from "../../assets/images/paypal-logo-2.png";
import visa from "../../assets/images/visa-logo.png";
import '../../assets/styles/layout/Product.css'
import { deleteProductAPI, getAllProductAPIAction } from '../../redux/actions/ProductAction/ProductAction';
import { getProductFormAction } from '../../redux/actions/DrawerActions/DrawerActions';
import ProductForm from '../../components/forms/ProductForm';

export default function Product() {
    const dispatch = useDispatch();
    const ProductList = useSelector((state) => state.ProductReducer.ProductList);
    const ProductCategorySearch = useSelector((state) => state.ProductReducer.ProductCategorySearch);
    useEffect(() => {
        dispatch(getAllProductAPIAction());
    }, []);
    const data = [
        {
            title: "March, 01, 2021",
            description: "#MS-415646",
            amount: "$180",
        },
        {
            title: "February, 12, 2021",
            description: "#RV-126749",
            amount: "$250",
        },
        {
            title: "April, 05, 2020",
            description: "#FB-212562",
            amount: "$550",
        },
        {
            title: "June, 25, 2019",
            description: "#QW-103578",
            amount: "$400",
        },
        {
            title: "March, 03, 2019",
            description: "#AR-803481",
            amount: "$700",
        },
    ];

    const wifi = [
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 22.5 20.625"
            key={0}
        >
            <g id="wifi" transform="translate(0.75 0.75)">
                <circle
                    id="Oval"
                    cx="1.5"
                    cy="1.5"
                    r="1.5"
                    transform="translate(9 16.875)"
                    fill="#fff"
                ></circle>
                <path
                    id="Path"
                    d="M0,1.36a6.377,6.377,0,0,1,7.5,0"
                    transform="translate(6.75 11.86)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                ></path>
                <path
                    id="Path-2"
                    data-name="Path"
                    d="M14.138,2.216A12.381,12.381,0,0,0,0,2.216"
                    transform="translate(3.431 6)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                ></path>
                <path
                    id="Path-3"
                    data-name="Path"
                    d="M0,3.294a18.384,18.384,0,0,1,21,0"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                ></path>
            </g>
        </svg>,
    ];

    const angle = [
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            key={0}
        >
            <g id="bank" transform="translate(0.75 0.75)">
                <path
                    id="Shape"
                    transform="translate(0.707 9.543)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                ></path>
                <path
                    id="Path"
                    d="M10.25,0,20.5,9.19H0Z"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                ></path>
                <path
                    id="Path-2"
                    data-name="Path"
                    d="M0,.707H20.5"
                    transform="translate(0 19.793)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                ></path>
            </g>
        </svg>,
    ];

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
    const download = [
        <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key="0"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                fill="#111827"
            ></path>
        </svg>,
    ];
    const deletebtn = [
        <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={0}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
                fill="#111827"
                className="fill-danger"
            ></path>
        </svg>,
    ];

    const productColumns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: ['productName', 'productDescription'],
            sorter: (a, b) => a.productName - b.productName,
            render: (text, record) => (
                <>
                    {record.productName} <Popover content={record.productDescription} title="Mô tả sản phẩm">
                        <Button type="ghost">Xem mô tả sản phẩm</Button>
                    </Popover>
                </>
            )
        },
        {
            title: 'Hiển thị',
            dataIndex: 'status',
            key: 'status',
            render: status => <Checkbox checked={status}>{status ? 'Hiển thị' : 'Ẩn'}</Checkbox>
        },
        {
            title: 'Danh mục sản phẩm',
            dataIndex: ['productCategoryID', 'productCategoryName'],
            key: 'productCategoryID',
            filters: ProductCategorySearch,
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.productCategoryID.indexOf(value) === 0,
            render: (value, record) => (
                <>
                    {record.productCategoryName}
                </>
            ),
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createTime',
            key: 'createTime',
            sorter: (a, b) => a.createTime - b.createTime,
            render: createTime => dateFormat(Date(createTime), "dd/mm/yyyy")
        },
        {
            title: 'Người tạo',
            dataIndex: 'createBy',
        },
        {
            title: <Button className='d-inline-flex align-items-center' size='small' icon={<AppstoreAddOutlined />}
                onClick={() => { dispatch(getProductFormAction('Thêm Sản Phẩm', <ProductForm Product={null} />)) }}>
                Thêm Sản Phẩm Mới
            </Button>,
            key: 'action',
            dataIndex: ['productID', 'productName', 'productDetail', 'productImages', 'productALTSeo', 'status', 'productCategoryID'],
            render: (text, record) => (
                <>
                    <Button className='d-inline-flex align-items-center me-1' size='small' type='primary' icon={<EditOutlined />}
                        onClick={() => {
                            const product = {
                                productID: record.productID,
                                productName: record.productName,
                                productDetail: record.productDetail,
                                productImages: record.productImages,
                                productALTSeo: record.productALTSeo,
                                status: record.status,
                                productCategoryID: record.productCategoryID
                            }
                            dispatch(getProductFormAction('Chỉnh sửa sản phẩm', <ProductForm Product={product} />))
                        }}>
                        Chỉnh sửa
                    </Button>
                    <Popconfirm
                        title={`Bạn có muốn xóa "${record.productName}" không?`}
                        onConfirm={() => {
                            const product = { productID: record.productID }
                            dispatch(deleteProductAPI(product));
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button className='d-inline-flex align-items-center' size='small' type="primary" danger icon={<DeleteOutlined />}>
                            Xóa
                        </Button>
                    </Popconfirm>
                </>
            ),
        }
    ];

    function onChange(pagination, filters, sorter, extra) {
        // console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <>
            <Row gutter={[24, 0]}>
                <Col xs={24} md={16}>
                    <Row gutter={[24, 0]}>
                        <Col xs={24} xl={12} className="mb-24">
                            <Card
                                title={wifi}
                                bordered={false}
                                className="card-credit header-solid h-ful"
                            >
                                <h5 className="card-number">4562 1122 4594 7852</h5>

                                <div className="card-footer">
                                    <div className="mr-30">
                                        <p>Card Holder</p>
                                        <h6>Jack Peterson</h6>
                                    </div>
                                    <div className="mr-30">
                                        <p>Expires</p>
                                        <h6>11/22</h6>
                                    </div>
                                    <div className="card-footer-col col-logo ml-auto">
                                        <img src={mastercard} alt="mastercard" />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={12} xl={6} className="mb-24">
                            <Card bordered={false} className="widget-2 h-full">
                                <Statistic
                                    title={
                                        <>
                                            <div className="icon">{angle}</div>
                                            <h6>Salary</h6>
                                            <p>Belong Interactive</p>
                                        </>
                                    }
                                    value={"$2,000"}
                                    prefix={<PlusOutlined />}
                                />
                            </Card>
                        </Col>
                        <Col xs={12} xl={6} className="mb-24">
                            <Card bordered={false} className="widget-2 h-full">
                                <Statistic
                                    title={
                                        <>
                                            <div className="icon">
                                                <img src={paypal} alt="paypal" />
                                            </div>
                                            <h6>Paypal</h6>
                                            <p>Freelance Paymente</p>
                                        </>
                                    }
                                    value={"$49,000"}
                                    prefix={<PlusOutlined />}
                                />
                            </Card>
                        </Col>
                        <Col xs={24} className="mb-24">
                            <Card
                                className="header-solid h-full ant-card-p-0"
                                title={
                                    <>
                                        <Row
                                            gutter={[24, 0]}
                                            className="ant-row-flex ant-row-flex-middle"
                                        >
                                            <Col xs={24} md={12}>
                                                <h6 className="font-semibold m-0">Payment Methods</h6>
                                            </Col>
                                            <Col xs={24} md={12} className="d-flex">
                                                <Button type="primary">ADD NEW CARD</Button>
                                            </Col>
                                        </Row>
                                    </>
                                }
                            >
                                <Row gutter={[24, 0]}>
                                    <Col span={24} md={12}>
                                        <Card className="payment-method-card">
                                            <img src={mastercard} alt="mastercard" />
                                            <h6 className="card-number">**** **** **** 7362</h6>
                                            <Button type="link" className="ant-edit-link">
                                                {pencil}
                                            </Button>
                                        </Card>
                                    </Col>
                                    <Col span={24} md={12}>
                                        <Card className="payment-method-card">
                                            <img src={visa} alt="visa" />
                                            <h6 className="card-number">**** **** **** 3288</h6>
                                            <Button type="link" className="ant-edit-link">
                                                {pencil}
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col span={24} md={8} className="mb-24">
                    <Card
                        bordered={false}
                        className="header-solid h-full ant-invoice-card"
                        title={[<h6 className="font-semibold m-0">Invoices</h6>]}
                        extra={[
                            <Button type="primary">
                                <span>VIEW ALL</span>
                            </Button>,
                        ]}
                    >
                        <List
                            itemLayout="horizontal"
                            className="invoice-list"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[<Button type="link">{download} PDF</Button>]}
                                >
                                    <List.Item.Meta
                                        title={item.title}
                                        description={item.description}
                                    />
                                    <div className="amount">{item.amount}</div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
            <h6 className="font-semibold m-0">Danh sách sản phẩm</h6>
            <hr />
            <Table columns={productColumns} dataSource={ProductList} onChange={onChange} />
        </>
    )
}
