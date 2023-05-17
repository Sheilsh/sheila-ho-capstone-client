import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DeleteModal.scss";
import close from "../../assets/icons/clear_black_24dp.svg";
import Button from "../Button/Button";

import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function DeleteModal({
  open,
  handleClose,
  handleDelete,
  snackBar,
}) {
  let navigate = useNavigate();

  return (
    <>
      <Modal open={open}>
        <div className="modal">
          <div className="modal__wrapper">
            <div className="modal__container">
              <div className="modal__header">
                <h1 className="modal__title">Cancel Booking?</h1>
                <div className="modal__iconbox">
                  <img
                    className="modal__icon"
                    src={close}
                    alt="close icon"
                    onClick={handleClose}
                  />
                </div>
              </div>
              <div className="modal__content">
                <div className="modal__info">
                  <Snackbar
                    open={snackBar.open}
                    autoHideDuration={3000}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Alert
                      severity="success"
                      sx={{
                        fontSize: {
                          xs: "1.1rem",
                          sm: "1.3rem",
                        },
                        color: "green",
                        "& .MuiAlert-message": {
                          padding: "10px 0",
                        },
                        width: "100%",
                      }}
                    >
                      {snackBar.message}
                    </Alert>
                  </Snackbar>
                  <p className="modal__msg">
                    Please confirm you'd like to cancel this booking?
                  </p>
                </div>
                <div className="modal__cta">
                  <Button
                    className="modal__button modal__button--red"
                    btnName="Delete"
                    onClick={handleDelete}
                  />
                  <Button
                    className="modal__button"
                    btnName="Cancel"
                    onClick={() => navigate("/history")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
