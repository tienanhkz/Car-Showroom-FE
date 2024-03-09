import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <>
      <section className="text-center text-lg-start">
        {/* <!-- Jumbotron --> */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Forget passWord</h2>
                  <form>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label" for="form3Example3">
                        Email address
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <Link to="/">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Send
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
    </>
  );
}

export default ForgetPassword;
