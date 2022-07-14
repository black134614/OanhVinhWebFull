import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Popconfirm, Popover, Table } from 'antd';
import dateFormat, { masks } from "dateformat";
import {
    Button
} from "antd";

import { DeleteOutlined, EditOutlined, AppstoreAddOutlined } from "@ant-design/icons";

import '../../assets/styles/layout/Product.css'
import { getPostFormAction } from '../../redux/actions/DrawerActions/DrawerActions';
import { deletePostAPIAction, getAllPostAPIAction } from '../../redux/actions/PostActions/PostActions';
import PostForm from '../../components/forms/PostForm';
import NoImg from '../../assets/images/no-img.jpg';
import { setAvatarParam } from '../../redux/actions/FormImageActions/FormImageActions';

export default function Product() {
    const dispatch = useDispatch();
    const PostList = useSelector((state) => state.PostReducer.PostList);
    const PostCategorySearch = useSelector((state) => state.PostReducer.PostCategorySearch);
    useEffect(() => {
        dispatch(getAllPostAPIAction());
    }, []);
    const PostColumns = [
        {
            title: 'Tên Bài Đăng',
            dataIndex: ['postName', 'postDescription'],
            sorter: (a, b) => a.postName - b.postName,
            render: (text, record) => (
                <>
                    <span>{record.postName}</span>
                    <Popover content={record.postDescription} title="Mô tả bài đăng">
                        <Button type="ghost">Xem mô tả bài đăng</Button>
                    </Popover>
                </>
            )
        },
        {
            title: 'Avatar',
            dataIndex: 'postImages',
            key: 'postImages',
            render: postImages => <img src={postImages} style={{maxWidth: 50, borderRadius: "0.25rem"}}></img>
        },
        {
            title: 'Hiển thị',
            dataIndex: 'status',
            key: 'status',
            render: status => <Checkbox checked={status}>{status ? 'Hiển thị' : 'Ẩn'}</Checkbox>
        },
        {
            title: 'Danh mục bài đăng',
            dataIndex: ['postCategoryID', 'postCategoryName'],
            key: 'postCategoryID',
            filters: PostCategorySearch,
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.postCategoryID.indexOf(value) === 0,
            render: (value, record) => (
                <>
                    {record.postCategoryName}
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
                onClick={() => {
                    dispatch(getPostFormAction('Thêm Bài Đăng', <PostForm Post={null} />))
                    dispatch(setAvatarParam(NoImg))
                }}>
                <span class="d-none d-lg-block">Thêm Bài Đăng Mới</span>
            </Button>,
            key: 'action',
            dataIndex: ['postID', 'postName', 'postDescription', 'postDetail', 'postImages', 'postALTSEO', 'status', 'postCategoryID'],
            render: (text, record) => (
                <>
                    <Button className='d-inline-flex align-items-center me-1' size='small' type='primary' icon={<EditOutlined />}
                        onClick={() => {
                            const Post = {
                                postID: record.postID,
                                postName: record.postName,
                                postDescription: record.postDescription,
                                postDetail: record.postDetail,
                                postImages: record.postImages,
                                postALTSEO: record.postALTSEO,
                                status: record.status,
                                postCategoryID: record.postCategoryID
                            }
                            dispatch(setAvatarParam(record.postImages));
                            dispatch(getPostFormAction('Chỉnh sửa bài đăng', <PostForm Post={Post} />))
                        }}>
                        <span class="d-none d-lg-block">Chỉnh sửa</span>
                    </Button>
                    <Popconfirm
                        title={`Bạn có muốn xóa "${record.postName}" không?`}
                        onConfirm={() => {
                            const Post = { postID: record.postID }
                            dispatch(deletePostAPIAction(Post));
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button className='d-inline-flex align-items-center' size='small' type="primary" danger icon={<DeleteOutlined />}>
                        <span class="d-none d-lg-block">Xóa</span>
                        </Button>
                    </Popconfirm>
                </>
            ),
        }
    ];

    return (
        <>
            <h6 className="font-semibold m-0">Danh sách bài viết</h6>
            <hr />
            <Table columns={PostColumns} dataSource={PostList} />
        </>
    )
}
