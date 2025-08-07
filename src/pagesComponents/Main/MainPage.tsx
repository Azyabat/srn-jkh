import { Slider, Space, Steps, Text } from "@/components";
import { Wrapper } from "./styled";

export const MainPage = () => {
  return (
    <Wrapper>
      <Space $direction="vertical" $size={32}>
        <Slider
          width="100%"
          height="400px"
          slides={[
            { id: 1, content: "Обратитесь в вашу УК не выходя из дома" },
            {
              id: 2,
              content:
                "Подключите ЖКХ или прокуратуру к решению вашего вопроса",
            },
            {
              id: 3,
              content:
                "Отслеживайте и общайтесь по вашему обращению в реальном времени",
            },
          ]}
        />
        <Space $direction="vertical" $size={32} $alignItems="center">
          <Text $fontSize={24} $fontWeight={600}>
            О портале
          </Text>
          <Text $fontSize={16} $fontWeight={400}>
            Портал «Мой ЖКХ» — это городской сервис для обратной связи между
            жителями и управляющими организациями. <br /> Через наш портал вы
            можете:
            <br /> - Подать обращение в вашу УК; <br />- Подключить дирекцию
            коммунального хозяйства или прокуратуру;
            <br /> - Получить уникальный номер для отслеживания статуса;
            <br /> - Быть услышанным и получить ответ. <br />
            Всё официально. Всё прозрачно. <br />
            Портал разработан при поддержке Администрации г.о. Саранск и
            правительства Республики Мордовия
          </Text>
        </Space>
        <Space $direction="vertical" $size={64} $alignItems="center">
          <Text $fontSize={24} $fontWeight={600}>
            Как это работает?
          </Text>
          <Steps
            steps={[
              "Зарегистрируйтесь на портале",
              "Заполните обращение",
              "Получите номер обращения",
              "Следите за решением обращения",
            ]}
          />
        </Space>
      </Space>
    </Wrapper>
  );
};
