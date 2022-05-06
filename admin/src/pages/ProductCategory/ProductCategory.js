import React, { useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip, Checkbox, Popconfirm, message } from 'antd';
import { AppstoreAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, getAllProductCategorySagaAction, getEditProductCategoryFormAction, getProductCategoryFormAction, setEditProductCategoryFormAction } from '../../redux/actions/ProductCategoryActions/ProductCategoryActions';
import ProductCategoryForm from '../../components/forms/ProductCategoryForm';
import { SET_EDIT_PRODUCT_CATEGORY_FORM } from '../../redux/constants/ProductCategoryConstants/ProductCategoryConstants';
import EditProductCategoryForm from '../../components/forms/EditProductCategoryForm';

export default function ProductCategory() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.ProductCategoryReducer.ProductCategory)
    useEffect(() => {
        dispatch(getAllProductCategorySagaAction())
    }, []);
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
            render: status => <Checkbox checked={status}>{status ? 'Hiển thị' : 'Ẩn'}</Checkbox>
        },
        {
            title: 'Tạo Bởi',
            key: 'createBy',
            dataIndex: 'createBy',
        },
        {
            title: <Button className='d-inline-flex align-items-center' size='small' icon={<AppstoreAddOutlined />}
                onClick={() => { dispatch(getProductCategoryFormAction('Thêm Danh Mục Sản Phẩm Mới', <ProductCategoryForm />)) }}>
                Thêm Mới
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
                        Chỉnh sửa
                    </Button>
                    <Popconfirm
                        title={`Bạn có muốn xóa "${record.tittle}" không?`}
                        onConfirm={() => {
                            dispatch(deleteAction(record.productCategoryID));
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


    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
