import React, { useEffect } from 'react'
import { Table, Tag, Space, Button, Tooltip, Checkbox, Popconfirm, message } from 'antd';
import { AppstoreAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { deletePostCategoryAPIAction, getAllPostCategoryAPIAction } from '../../redux/actions/PostCategoryActions/PostCategoryActions';
import PostCategoryForm from '../../components/forms/PostCategoryForm';
import { getPostCategoryFormAction } from '../../redux/actions/DrawerActions/DrawerActions';

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
            render: status => <Checkbox checked={status}>{status ? 'Hiển thị' : 'Ẩn'}</Checkbox>
        },
        {
            title: 'Tạo Bởi',
            key: 'createBy',
            dataIndex: 'createBy',
        },
        {
            title: <Button className='d-inline-flex align-items-center' size='small' icon={<AppstoreAddOutlined />}
                onClick={() => {
                    dispatch(getPostCategoryFormAction('Thêm Danh Mục Bài Đăng Mới', <PostCategoryForm />))
                }}>
                Thêm Mới
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
                        Chỉnh sửa
                    </Button>
                    <Popconfirm
                        title={`Bạn có muốn xóa "${record.tittle}" không?`}
                        onConfirm={() => {
                            const PostCategory = {postCategoryID: record.postCategoryID}
                            dispatch(deletePostCategoryAPIAction(PostCategory));
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
