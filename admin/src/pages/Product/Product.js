import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Popconfirm, Popover, Table } from 'antd';
import dateFormat, { masks } from "dateformat";
import {
    Button
} from "antd";

import { DeleteOutlined, EditOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import '../../assets/styles/layout/Product.css'
import { deleteProductAPI, getAllProductAPIAction } from '../../redux/actions/ProductAction/ProductAction';
import { getProductFormAction } from '../../redux/actions/DrawerActions/DrawerActions';
import ProductForm from '../../components/forms/ProductForm';
import { setAvatarParam, setInputImgValue } from '../../redux/actions/FormImageActions/FormImageActions';
import NoImg from '../../assets/images/no-img.jpg';


export default function Product() {
    const dispatch = useDispatch();
    const ProductList = useSelector((state) => state.ProductReducer.ProductList);
    const ProductCategorySearch = useSelector((state) => state.ProductReducer.ProductCategorySearch);
    useEffect(() => {
        dispatch(getAllProductAPIAction());
    }, []);

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
            title: 'Avatar',
            dataIndex: 'productImages',
            key: 'productImages',
            render: productImages => <img src={productImages} style={{maxWidth: 50, borderRadius: "0.25rem"}}></img>
        },
        {
            title: 'Hiển thị',
            dataIndex: 'status',
            key: 'status',
            render: status => <Checkbox checked={status}></Checkbox>
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
            title: <Button className='d-inline-flex align-items-center btn-primary' size='small' icon={<AppstoreAddOutlined />}
                onClick={() => {
                    dispatch(getProductFormAction('Thêm Sản Phẩm', <ProductForm Product={null} />))
                    dispatch(setAvatarParam(NoImg))
                }} >
                <span className='d-none d-lg-inline-block'>Thêm Sản Phẩm</span>
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
                            dispatch(setAvatarParam(record.productImages));
                            dispatch(getProductFormAction('Chỉnh sửa sản phẩm', <ProductForm Product={product} />));
                        }}>
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
                        </Button>
                    </Popconfirm>
                </>
            ),
        }
    ];
    return (
        <>
            <h6 className="font-semibold m-0">Danh sách sản phẩm</h6>
            <hr />
            <Table columns={productColumns} dataSource={ProductList} />
        </>
    )
}
