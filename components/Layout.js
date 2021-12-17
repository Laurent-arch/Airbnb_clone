import React from "react";
import Header from "./Header";
import Modal from "./Modal";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";

import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Layout = (props) => {
 
  const showModal = useStoreState((state) => state.modals.showModal);
  const showLoginModal = useStoreState((state) => state.modals.showLoginModal);
  const showRegistrationModal = useStoreState(
    (state) => state.modals.showRegistrationModal
  );

  const setHideModal = useStoreActions(
    (actions) => actions.modals.setHideModal
  );
  const setShowRegistrationModal = useStoreActions(
    (actions) => actions.modals.setShowRegistrationModal
  );
  const setShowLoginModal = useStoreActions(
    (actions) => actions.modals.setShowLoginModal
  );

  return (
    <div>
      <Header />
      <main>{props.content}</main>
      {showModal && (
        <Modal close={() => setHideModal()}>
          {showLoginModal && (
            <LoginModal
              showSignup={() => {
                setShowRegistrationModal();
              }}
            />
          )}
          {showRegistrationModal && (
            <RegistrationModal
              showLogin={() => {
                setShowLoginModal();
              }}
            />
          )}
        </Modal>
      )}

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
};

export default Layout;
