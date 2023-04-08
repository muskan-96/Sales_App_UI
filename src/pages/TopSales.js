import "./style.css";
function TopSales()  {
    return(
        <>
        <h2 className="Heading">TOP SALES</h2>
        <div className='container border mt-2' style={{fontFamily: "'Ubuntu', sans-serif"}}>
                <table className="table mt-1">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Sales ID:</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sales Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>S1212</td>
                            <td>Laptop</td>
                            <td>2</td>
                            <td>90000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>S1423</td>
                            <td>Mobile</td>
                            <td>5</td>
                            <td>85000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default TopSales;