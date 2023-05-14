import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DeleteModal.scss";
import close from "../../assets/icons/clear_black_24dp.svg";
import Button from "../Button/Button";

import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function DeleteModal({
  open,
  handleClose,
  status,
  handleDelete,
}) {
  let navigate = useNavigate();

  return (
    <>
      <Modal open={open}>
        <div className="modal">
          <div className="modal__wrapper">
            <div className="modal__container">
              <div className="modal__header">
                <h1 className="modal__title">Delete Booking?</h1>
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
                  {status && (
                    <Stack sx={{ width: "100%" }} spacing={2}>
                      <Alert
                        severity="success"
                        sx={{
                          fontSize: "1.1rem",
                          color: "green",
                          "& .MuiAlert-message": {
                            padding: "10px 0", // adjust the padding as needed
                          },
                        }}
                      >
                        {status}
                      </Alert>
                    </Stack>
                  )}
                  <p className="modal__msg">
                    Please confirm you'd like to delete this booking?
                  </p>
                </div>
                <div className="modal__cta">
                  <Button
                    className="modal__button"
                    btnName="Cancel"
                    onClick={() => navigate("/history")}
                  />
                  <Button
                    className="modal__button modal__button--red"
                    btnName="Delete"
                    onClick={handleDelete}
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
