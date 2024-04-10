import './LoginPage.scss'

export default function LoginPage(){
    return(<>
        <main>
        <div className="login">
          <form action="" method="POST" autoComplete="on">
            <div className="formulario">
              <h1>Login</h1>
              <div className="boxInput">
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    alignContent: "center"
                  }}
                >
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="CB" />
                  <p
                    style={{
                      color: "rgb(126, 126, 126)",
                      position: "relative",
                      top: 1
                    }}
                  >
                    Lembre-se
                  </p>
                </div>
              </div>
              <div className="boxButton">
                <button type="submit" className="button-flask">
                  continue
                </button>
              </div>
              <p style={{ color: "rgb(126, 126, 126)", justifySelf: "center" }}>
                Não tem conta?
                <a
                  style={{ textDecoration: "none" }}
                  href="{{ url_for('register') }}"
                >
                  {" "}
                  inscrever-se{" "}
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="banner">
          <img
            src="{{ url_for('static', filename = 'img/Geral-Do-cuate.png') }}"
            alt=""
            style={{ width: "95%" }}
          />
        </div>
        </main>
    </>)
}