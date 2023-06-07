import classes from "./Feedback.module.css";
import { IconButton, Tooltip } from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Feedback = () => {
  return (
    <div className={`container ${classes.feedback}`}>
      <h2 className={"title"}>Мы всегда вам рады!</h2>
      <span>
        <p>
          Безусловно, новая модель организационной деятельности в значительной
          степени обусловливает важность распределения внутренних резервов и
          ресурсов.
          <Tooltip title="Реплицированные с зарубежных источников, исследования формируют глобальную сеть.">
            <IconButton>
              <HelpOutlineRoundedIcon />
            </IconButton>
          </Tooltip>
        </p>
      </span>
      <Form>
        <Form.Group className="mb-3 w-50" controlId="feedbackName">
          <Form.Control type="name" placeholder="Как вас зовут?" />
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="feedbackPhone">
          <Form.Control type="phone" placeholder="Ваш телефон" />
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="feedbackEmail">
          <Form.Control type="email" placeholder="Ваш e-mail" />
        </Form.Group>
        <button type="submit" className={"btn__primary-fill"}>
          Отправить
        </button>
        <Form.Group className="mb-3 w-50" controlId="feedbackCheckbox">
          <Form.Check
            type="checkbox"
            label="Принимаю пользовательское соглашение"
          />
        </Form.Group>
      </Form>
    </div>
  );
};
