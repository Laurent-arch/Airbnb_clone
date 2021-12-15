import React from 'react'
import Header from './Header';

const Layout = (props) => {
    return (
      <div>
        <Header />
        <main>{props.content}</main>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500&family=Source+Sans+3:wght@300&display=swap");
          main {
            font-family: "Source Sans 3", sans-serif;
            font-size: 1.5rem;
            position: relative;
            max-width: 56em;
            background-color: white;
            padding: 2em;
            margin: 0 auto;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}

export default Layout
