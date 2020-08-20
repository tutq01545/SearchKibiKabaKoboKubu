import React, {Fragment, useEffect, useState} from "react";
import MaterialTable from "material-table";
import 'C://Users/PC-Tien/WebstormProjects/react-chat-app/src/Components/App.css'


export default function DataTableComponent(props) {

    const [column, setColumn] = useState([
        { title: 'URL', field: 'url' },
        { title: 'Snippet', field: 'snippet' },
        { title: 'Rank', field: 'rank' },
    ])




    if(props.userClickedOnSearch === true) {
        return(
        <Fragment>
            <div class={"dataTableStyle"}>
                <MaterialTable
                    title="Results"
                    columns={column}
                    data={props.mockDataToTest}
                    options={{paging: false, search: false, actionsColumnIndex: -1}}
                    editable={{

                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    props.setMockDataToTest([...props.mockDataToTest, newData]);

                                    resolve();
                                }, 1000)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataUpdate = [...props.mockDataToTest];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    props.setMockDataToTest([...dataUpdate]);

                                    resolve();
                                }, 1000)
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const dataDelete = [...props.mockDataToTest];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    props.setMockDataToTest([...dataDelete]);

                                    resolve();
                                }, 1000)
                            }),
                    }}
                />
            </div>
        </Fragment>
        )

    } else return null;


}