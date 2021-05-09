import React from "react";

export default function ExpenseTable() {
    return (
        <div className="d-flex flex-column align-items-center">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}