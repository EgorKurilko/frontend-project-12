import React, { useRef, useEffect, useState } from 'react';
import {
  Form, FormControl, Button, InputGroup,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MessageForm = ({ handleSubmit, isLoading }) => {
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="mt-auto px-5 py-3">
      <Form noValidate onSubmit={(e) => { handleSubmit(e); setMessage(''); }} className="py-1 border rounded-2">
        <InputGroup hasValidation>
          <FormControl
            name="body"
            aria-label={t('messages.newMessage')}
            placeholder={t('messages.printMessage')}
            className="border-0 p-0 ps-2"
            ref={inputRef}
            value={message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            disabled={isLoading || !message}
            variant="outline-secondary"
            className="group-vertical"
            style={{
              backgroundColor: 'transparent', // Установите цвет фона
              color: '#6c757d', // Установите цвет текста (обычно это цвет для outline-secondary)
              borderColor: '#6c757d', // Установите цвет границы
              boxShadow: 'none', // Уберите тень
              transition: 'none', // Уберите анимацию при наведении
            }}
            onMouseDown={(e) => e.preventDefault()} // Предотвращает изменение стиля при нажатии
          >
            <i
              className="bi bi-arrow-right-square"
              style={{
                width: '20px',
                height: '20px',
                display: 'inline-block',
              }}
            />
            <span className="visually-hidden">{t('buttons.send')}</span>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default MessageForm;
