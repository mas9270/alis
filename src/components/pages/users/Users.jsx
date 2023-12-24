import React, { Component } from 'react'
import CustomBtn from '../../custom/customBtn/CustomBtn'

export default class Users extends Component {

    state = {
        users: []
    }


    getProducts = () => {
        import("./userList")
            .then(module => {
                console.log(module.default)
                this.setState({
                    users: module.default
                })
            })
    }

    render() {
        return (
            <div className='users'>

                <div className='wrapper-max'>
                    <div>
                        <CustomBtn action={this.getProducts} content={"نمایش کاربران (code splitting)"} />
                    </div>
                    <div className='w-100'>
                        {this.state.users.length !== 0
                            ?
                            <div className='w-100 mt-3'>
                                <table className='w-100' style={{ backgroundColor: "#101314" }}>
                                    <thead>
                                        <tr>
                                            <th>شناسه</th>
                                            <th>نام</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.users.map((user, index) =>
                                                <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            :
                            <div className='w-100 d-flex justify-content-center mt-5'>
                                <h3>نمایش کاربران را کلیک کنید</h3>
                            </div>
                        }
                    </div>

                </div>
            </div>
        )
    }
}

