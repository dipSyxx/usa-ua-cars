export type WorksDataProps = {
  id: number
  title: {
    ua: string
    ru: string
  }
  subtitle: {
    ua: string
    ru: string
  }
  image: string
  index: number
}

export const WorksData: WorksDataProps[] = [
  {
    id: 1,
    title: {
      ua: 'Заявка та консультація',
      ru: 'Заявка и консультация',
    },
    subtitle: {
      ua: 'Ви залишаєте заявку, і наш менеджер зв’язується з вами, щоб обговорити всі питання та бюджет.',
      ru: 'Вы оставляете заявку, и наш менеджер связывается с вами, чтобы обсудить все вопросы и бюджет.',
    },
    image: 'phone',
    index: 0.1,
  },
  {
    id: 2,
    title: {
      ua: 'Договір',
      ru: 'Договор',
    },
    subtitle: {
      ua: 'Підписуємо договір де фіксуємо всі умови та фінальну вартість.',
      ru: 'Подписываем договор, в котором фиксируем все условия и окончательную стоимость.',
    },
    image: 'contract',
    index: 0.6,
  },
  {
    id: 3,
    title: {
      ua: 'Пошук авто',
      ru: 'Поиск авто',
    },
    subtitle: {
      ua: 'Менеджер підбирає узгоджене авто, прораховує вартість та погоджує з клієнтом і робить перевірку документації та технічного стану у CarFax',
      ru: 'Менеджер подбирает согласованное авто, рассчитывает стоимость и согласовывает с клиентом, проводит проверку документации и технического состояния в CarFax',
    },
    image: 'search',
    index: 0.1,
  },
  {
    id: 4,
    title: {
      ua: 'Аукціон',
      ru: 'Аукцион',
    },
    subtitle: {
      ua: 'Менеджер приймає участь у торгах та викупає обране авто по максимально домовленій вартості',
      ru: 'Менеджер принимает участие в торгах и выкупает выбранное авто по максимально договоренной стоимости',
    },
    image: 'auction',
    index: 0.6,
  },
  {
    id: 5,
    title: {
      ua: 'Оплата',
      ru: 'Оплата',
    },
    subtitle: {
      ua: 'Протягом 2х днів ви сплачуєте через банк вигране авто з урахуванням аукціонних зборів на розрахунковий рахунок компанії USA-UA CARS, наступні оплати після відправки авто з порту',
      ru: 'В течение 2-х дней вы оплачиваете через банк выигранное авто с учетом аукционных сборов на расчетный счет компании USA-UA CARS, следующие платежи после отправки авто из порта',
    },
    image: 'cash',
    index: 0.1,
  },
  {
    id: 6,
    title: {
      ua: 'Доставка',
      ru: 'Доставка',
    },
    subtitle: {
      ua: 'Ваша машина евакуатором доставляється у найближчий порт, після вигрузки робиться фотофіксація, далі авто завнтажується у контейнер для доставки у європейський порт. Після доставки у порт Європи ми власним автовозом вивозимо авто в Україну до міста Львів.',
      ru: 'Ваша машина эвакуатором доставляется в ближайший порт, после выгрузки делается фотофиксация, затем авто загружается в контейнер для доставки в европейский порт. После доставки в порт Европы мы собственным автовозом вывозим авто в Украину до города Львов.',
    },
    image: 'del',
    index: 0.6,
  },
  {
    id: 7,
    title: {
      ua: 'Розмитнення',
      ru: 'Растаможка',
    },
    subtitle: {
      ua: 'Розмитнюємо авто у Львові, сплачуємо мито, податки та всі збори',
      ru: 'Растаможиваем авто во Львове, платим пошлины, налоги и все сборы',
    },
    image: 'calc',
    index: 0.1,
  },
  {
    id: 8,
    title: {
      ua: 'Отримання авто',
      ru: 'Получение авто',
    },
    subtitle: {
      ua: 'Після всіх процедур, доставляємо авто до міста клієнта з повним пакетом документів для подальшого ремонту',
      ru: 'После всех процедур, доставляем авто в город клиента с полным пакетом документов для дальнейшего ремонта',
    },
    image: 'shake',
    index: 0.6,
  },
]
