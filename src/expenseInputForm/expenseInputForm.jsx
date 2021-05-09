import React, {useState} from "react";

export default function ExpenseInputForm() {
    // Initialiazation of all the states
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(Date());

    return(
        <>
            <form>
                {/* Name */}
                <div className="input-group mb-3">
                    <span className="input-group-text">Name:</span>
                    <input type="text" className=" flex-grow-1 form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                </div>

                {/* Amount */}
                <div className="input-group mb-3">
                    <span className="input-group-text">Amount:</span>
                    <input type="text" className=" flex-grow-1 form-control" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>

                {/* date */}
                <div className="input-group mb-3">
                    <span className="input-group-text">Date:</span>
                    <input type="date" className=" flex-grow-1 form-control" placeholder="Date" value={date} onChange={e => setDate(e.target.value)} />
                </div>

                <button className="btn btn-success">Add</button>
            </form>
        </>
    )
}

