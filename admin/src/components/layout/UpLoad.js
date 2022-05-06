// import { Upload, message, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// const props = {
//     name: 'file',
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     headers: {
//         authorization: 'authorization-text',
//     },
//     onChange(info) {
//         if (info.file.status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (info.file.status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully`);
//         } else if (info.file.status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
//     onSelectFile(event) {
//         let reader = new FileReader(); // HTML5 FileReader API
//         if (event.target.files && event.target.files[0]) {
//           reader.readAsDataURL(event.target.files[0]);

//           //When file uploads set it to file formcontrol
//           reader.onload = (e) => {
//             // called once readAsDataURL is completed
//             this.image = e.target.result.toString();
//             this.overall.c2b_overall_image_file = e.target.result.toString();
//           };
//         }
//       }
// };

// export default () => (
//     <Upload {...props}>
//         <Button icon={<UploadOutlined />}>Click to Upload</Button>
//     </Upload>
// );

import React, { useState } from 'react'
let image = "";
export default function UpLoad() {
    const [state, setstate] = useState("https://picsum.photos/200/300");
    const onSelectFile = (event) => {
        let reader = new FileReader(); // HTML5 FileReader API
        if (event.target.files && event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);

            //When file uploads set it to file formcontrol
            reader.onload = (e) => {
                // called once readAsDataURL is completed
                image = e.target.result.toString();
                console.log(image);
                setstate(image);
                // let responsive = e.target.result.toString(); send to api imgae
            };
        }
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Default file input example</label>
                <input className="form-control" onChange={(e) => { onSelectFile(e) }} type="file" id="formFile" />
            </div>
            <img src={state} />
        </div>

    )
}
