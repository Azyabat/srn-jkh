"use client";

import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DashedButton, Space, Text } from "@/components";
import { AuthModal } from "../AuthModal";
import { Wrapper } from "./styled";

export const Header = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <Wrapper>
      <Space $alignItems="center" $size={64}>
        <Link href={"/"}>
          <Space $alignItems="center" $size={12}>
            <HomeIcon size={32} color="#f2f2f2" />
            <Text $fontSize={28} $fontWeight={600} $color="#f2f2f2">
              Мой ЖКХ
            </Text>
          </Space>
        </Link>
        <Space $size={16} $width="fit-content">
          <Text $fontSize={16} $fontWeight={400} $color="#f2f2f2">
            Главная
          </Text>
          <Text $fontSize={16} $fontWeight={400} $color="#f2f2f2">
            Частые вопросы
          </Text>
        </Space>
      </Space>
      <Space $alignItems="center" $size={24} $width="270px">
        <Text $fontSize={16} $fontWeight={400} $color="#f2f2f2">
          Мои Обращения
        </Text>
        <DashedButton>
          <Text
            $fontSize={16}
            $fontWeight={400}
            $color="#f2f2f2"
            onClick={() => setOpenAuthModal(true)}
          >
            Войти
          </Text>
        </DashedButton>
      </Space>
      <AuthModal
        onClose={() => setOpenAuthModal(false)}
        isOpen={openAuthModal}
      />
    </Wrapper>
  );
};
