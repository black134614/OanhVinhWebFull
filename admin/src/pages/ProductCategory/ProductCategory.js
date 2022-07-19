import React, { useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip, Checkbox, Popconfirm, message } from 'antd';
import { AppstoreAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, deleteProductCategorySagaAction, getAllProductCategorySagaAction, getEditProductCategoryFormAction, getProductCategoryFormAction, setEditProductCategoryFormAction } from '../../redux/actions/ProductCategoryActions/ProductCategoryActions';
import ProductCategoryForm from '../../components/forms/ProductCategoryForm';
import { SET_EDIT_PRODUCT_CATEGORY_FORM } from '../../redux/constants/ProductCategoryConstants/ProductCategoryConstants';
import EditProductCategoryForm from '../../components/forms/EditProductCategoryForm';

export default function ProductCategory() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.ProductCategoryReducer.ProductCategoryList)
    useEffect(() => {
        dispatch(getAllProductCategorySagaAction());
    }, []);
    const renderDeleteTitle = (title) =>{
        return <>
        <span>Xóa Danh mục này và <strong>Toàn Bộ Sản Phẩm Liên Quan!</strong> Bạn có muốn xóa <strong>{title}</strong> không?</span>
        </>
    }
    const columns = [
        {
            title: 'Tên Danh Mục',
            dataIndex: 'tittle',
            key: 'tittle',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Mô Tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Hiển Thị',
            dataIndex: 'status',
            key: 'status',
            render: status => <Checkbox disabled checked={status}></Checkbox>
        },
        {
            title: 'Tạo Bởi',
            key: 'createBy',
            dataIndex: 'createBy',
        },
        {
            title: <Button className='d-inline-flex align-items-center btn-primary' size='small' icon={<AppstoreAddOutlined />}
                onClick={() => { dispatch(getProductCategoryFormAction('Thêm Danh Mục Sản Phẩm Mới', <ProductCategoryForm />)) }}>
                <span className='d-none d-lg-inline-block'>Thêm Danh Mục</span>
            </Button>,
            key: 'action',
            dataIndex: ['productCategoryID', 'tittle', 'description', 'status', 'createBy'],
            render: (text, record) => (
                <>
                    <Button className='d-inline-flex align-items-center me-1' size='small' type='primary' icon={<EditOutlined />}
                        onClick={() => {
                            const productCategory = {
                                productCategoryID: record.productCategoryID,
                                tittle: record.tittle,
                                description: record.description,
                                status: record.status,
                                createBy: record.createBy
                            }
                            dispatch(setEditProductCategoryFormAction(productCategory));
                            dispatch(getEditProductCategoryFormAction('Chỉnh sửa danh mục sản phẩm ' +record.tittle,<EditProductCategoryForm />));
                        }}>
                    </Button>
                    <Popconfirm
                        title={renderDeleteTitle(record.tittle)}
                        onConfirm={() => {
                            const productCategory = {
                                productCategoryID: record.productCategoryID,
                                tittle: record.tittle,
                                description: record.description,
                                status: record.status,
                                createBy: record.createBy
                            }
                            dispatch(deleteProductCategorySagaAction(productCategory));
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
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
