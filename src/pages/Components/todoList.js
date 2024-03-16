import React from 'react'

const todoList = () => {
    return (
        <section className=''>
            <div className="overflow-x-auto gap-4 my-5 px-8 pr-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default todoList
