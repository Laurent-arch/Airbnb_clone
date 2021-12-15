import Link from "next/link";

export default function Header(props) {
  return (
    <div className="nav-container">
      <Link href="/">
        <a>
          <img src="/img/logo.png" alt="" width="40px" />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/register">
              <a>Sign up</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Log in</a>
            </Link>
          </li>
        </ul>
      </nav>

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
