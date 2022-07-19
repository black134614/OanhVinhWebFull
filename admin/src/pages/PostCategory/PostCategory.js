import React, { useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip, Checkbox, Popconfirm, message } from 'antd';
import { AppstoreAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { deletePostCategoryAPIAction, getAllPostCategoryAPIAction } from '../../redux/actions/PostCategoryActions/PostCategoryActions';
import PostCategoryForm from '../../components/forms/PostCategoryForm';
import { getPostCategoryFormAction } from '../../redux/actions/DrawerActions/DrawerActions';

const renderDeleteTitle = (title) => {
    return <>
        <span>Xóa Danh mục này và <strong>Toàn Bộ Bài Viết Liên Quan!</strong> Bạn có muốn xóa <strong>{title}</strong> không?</span>
    </>
}
export default function PostCategory() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.PostCategoryReducer.PostCategoryList)
    useEffect(() => {
        dispatch(getAllPostCategoryAPIAction());
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
            render: status => <Checkbox checked={status}></Checkbox>
        },
        {
            title: 'Tạo Bởi',
            key: 'createBy',
            dataIndex: 'createBy',
        },
        {
            title: <Button className='d-inline-flex align-items-center btn-primary' size='small' icon={<AppstoreAddOutlined />}
                onClick={() => {
                    dispatch(getPostCategoryFormAction('Thêm Danh Mục Bài Đăng Mới', <PostCategoryForm />))
                }}>
                <span className='d-none d-lg-inline-block'>Thêm Danh Mục</span>
            </Button>,
            key: 'action',
            dataIndex: ['postCategoryID', 'tittle', 'description', 'status', 'createBy'],
            render: (text, record) => (
                <>
                    <Button className='d-inline-flex align-items-center me-1' size='small' type='primary' icon={<EditOutlined />}
                        onClick={() => {
                            const PostCategory = {
                                postCategoryID: record.postCategoryID,
                                tittle: record.tittle,
                                description: record.description,
                                status: record.status
                            }
                            dispatch(getPostCategoryFormAction('Sửa Danh Mục Bài Đăng', <PostCategoryForm PostCategory={PostCategory} />))
                        }}>
                    </Button>
                    <Popconfirm
                        title={renderDeleteTitle(record.tittle)}
                        onConfirm={() => {
                            const PostCategory = { postCategoryID: record.postCategoryID }
                            dispatch(deletePostCategoryAPIAction(PostCategory));
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
