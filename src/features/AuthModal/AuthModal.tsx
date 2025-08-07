"use client";

import { FC, useMemo, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import {
  Input,
  LinkButton,
  Modal,
  PrimaryButton,
  Space,
  Text,
} from "@/components";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const AuthModal: FC<Props> = ({ onClose, isOpen }) => {
  const [authType, setAuthType] = useState<"login" | "register">("login");
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password",
  );

  const enterContent = useMemo(() => {
    return (
      <Space $size={18} $direction="vertical" $width="260px">
        <Input label="Логин" labelAlign="center" />
        <Input
          label="Пароль"
          labelAlign="center"
          type={passwordType}
          postfix={
            passwordType === "password" ? (
              <Eye
                onClick={() => {
                  setPasswordType("text");
                }}
              />
            ) : (
              <EyeClosed
                onClick={() => {
                  setPasswordType("password");
                }}
              />
            )
          }
        />
        <PrimaryButton style={{ width: "100%" }}>Войти</PrimaryButton>
        <Space $justifyContent="center">
          <Text $fontSize={12} $fontWeight={300}>
            Нет аккаунта?
          </Text>
          <LinkButton>
            <Text
              $color="blue"
              $fontSize={12}
              $fontWeight={300}
              onClick={() => setAuthType("register")}
            >
              Зарегистрироваться
            </Text>
          </LinkButton>
        </Space>
      </Space>
    );
  }, [passwordType]);

  return (
    <Modal
      width="400px"
      onClose={() => {
        onClose();
        setAuthType("login");
      }}
      isOpen={isOpen}
      headerText=""
    >
      <Space $direction="vertical" $alignItems="center" $size={24}>
        <Text $fontSize={22} $fontWeight={500}>
          {authType === "login" ? "Вход" : "Регистрация"}
        </Text>
        {authType === "login" ? enterContent : null}
      </Space>
    </Modal>
  );
};
