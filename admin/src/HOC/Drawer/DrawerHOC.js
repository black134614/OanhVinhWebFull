import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { closeDrawer, openDrawer } from '../../redux/actions/DrawerActions/DrawerActions';

export default function DrawerHOC(props) {
    const { visible, ComponentContentDrawer,callBackSubmit,title } = useSelector(state => state.DrawerReducer);

    const dispatch = useDispatch();
    const showDrawer = () => {
        dispatch(openDrawer());
    };

    const onClose = () => {
        dispatch(closeDrawer());

    };
    return (
        <>
            <Drawer
                title={title}
                width={"80vw"}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}

                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={callBackSubmit} type="primary">
                            Submit
                        </Button>
                    </div>
                }
            >
                {/* Nội dung thay đổi của drawer */}
                {ComponentContentDrawer}
     
            </Drawer>
        </>
    )
}
