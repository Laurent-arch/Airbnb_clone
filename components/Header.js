import Link from "next/link";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function Header(props) {
  const loggedIn = useStoreState((state) => state.login.loggedIn);
  const setLoggedIn = useStoreActions((actions) => actions.login.setLoggedIn);
  const setShowLoginModal = useStoreActions(
    (actions) => actions.modals.setShowLoginModal
  );
  const setShowRegistrationModal = useStoreActions(
    (actions) => actions.modals.setShowRegistrationModal
  );
  return (
    <div className="nav-container">
      <Link href="/">
        <a>
          <img src="/img/logo.png" alt="" width="40px" />
        </a>
      </Link>

      {loggedIn ? (
        <nav>
          <ul>
            <li>
              <a>Logged in</a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => setShowRegistrationModal()}>
                Sign up
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowLoginModal()}>
                Log in
              </a>
            </li>
          </ul>
        </nav>
      )}

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500&family=Source+Sans+3:wght@300&display=swap");
        ul {
          margin: 0;
          padding: 0;
        }

        li {
          display: block;
          float: left;
        }

        a {
          text-decoration: none;
          display: block;
          margin-right: 15px;
          color: #333;
        }

        nav a {
          padding: 1em 0.5em;
        }

        .nav-container {
          font-family: "Source Sans 3", sans-serif;
          border-bottom: 1px solid #eee;
          height: 50px;
        }

        img {
          float: left;
        }

        ul {
          float: right;
        }
      `}</style>
    </div>
  );
}
