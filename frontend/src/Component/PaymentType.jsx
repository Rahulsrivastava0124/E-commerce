import React, { useState } from 'react'
import PaymentDiv from './PaymentDiv'


export default function PaymentType({ Order_data, Order_Store_fn }) {

    const [PaymentMethod, setPaymentMethod] = useState("UPI");
    const PaymentTypeButton = [
        { Title: "Cash On Delivery", call: "COD" },
        { Title: "Credit/Debit Card", call: "CreditDebitCard" },
        { Title: "Net Banking", call: "NetBanking" },
        { Title: "Wallets", call: "Wallets" },
        { Title: "UPI", call: "UPI" },
    ]

    return (
        <div className=" mt-4 d-flex ">
            <ul className="list-group me-4 shadow"
                style={{ width: "330px" }}>
                {
                    PaymentTypeButton.map(({ Title, call }, index) => {
                        return (
                            <li className=' list-group-item'>
                                <input class="form-check-input me-2" type="radio" name="exampleRadios" id={`exampleRadios${index}`} value="option1" defaultChecked />
                                <label class="form-check-label w-75" htmlFor={`exampleRadios${index}`} onClick={() => setPaymentMethod(call)}>
                                    {Title}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
            <div className=" container border rounded p-2 shadow">
                <PaymentDiv Payment={PaymentMethod} OrderData={Order_data} AddToOrderList={Order_Store_fn} />
            </div>
        </div>
    )
}
