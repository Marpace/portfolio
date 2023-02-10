import {Link} from "react-router-dom"

function SuccessPage() {
  return (
    <main className="success-main">
    <h1 className="success-header">Thank you for contacting me!<br /> I will get back to you shortly.</h1>
    <Link className="button--green" to={"/"}>Back to main page</Link>
    {/* <a className="button--green" href="/home">Back to main page</a> */}
  </main>

  )
}

export default SuccessPage;