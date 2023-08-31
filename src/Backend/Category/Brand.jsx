import React from 'react'
import BackHeader from '../BackHeader'
import BackFooter from '../BackFooter'
import Sidebar from '../Sidebar'
const Brand = () => {
  return (
    <>
    <BackHeader />
    <div class="row rows">
        <div class="col-sm-5 col-md-3 col-lg-2">
            <Sidebar />
        </div>
        <div class="col-sm-8 col-md-9 col-lg-10">
            <div class="p-4">
                <div class="text-end">
                <button class="btn btn-primary"><a routerLink="/" class="text-light"> Add
                    New</a></button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Brand Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1111</td>
                            <td>Redmi</td>
                            <td class="icons">
                                <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>1112</td>
                            <td>Apple</td>
                            <td class="icons">
                                <a href="" class="view" data-toggle="modal"><i class="fa-solid fa-eye"></i></a>
                                <a href="" class="edit" data-toggle="modal"><i class="fa-solid fa-pen"></i></a>
                                <a href="" class="delete" data-toggle="modal"><i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <BackFooter />
    </>
  )
}

export default Brand