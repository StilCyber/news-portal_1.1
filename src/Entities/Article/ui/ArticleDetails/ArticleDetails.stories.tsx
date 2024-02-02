import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StateSchema } from 'app/providers/StoreProvider';
import {
   ArticleBlockType,
   ArticleType,
} from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
   title: 'entities/ArticleDetails',
   component: ArticleDetails,
   parameters: {},
   tags: ['autodocs'],
   argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

const state: DeepPartial<StateSchema> = {
   articleDetails: {
      data: {
         id: '1',
         title: 'Javascript news',
         subtitle: 'Что нового в JS за 2022 год?',
         img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
         views: 1022,
         createdAt: '26.02.2022',
         user: {
            id: '1',
            username: 'Stil',
            avatar: 'https://i.pinimg.com/736x/5d/71/5d/5d715dff6bce6937722a6d26888d5d62.jpg',
         },
         type: [ArticleType.IT],
         blocks: [
            {
               id: '1',
               type: ArticleBlockType.TEXT,
               title: 'Заголовок этого блока',
               paragraphs: [
                  'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                  'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                  'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
               ],
            },
            {
               id: '4',
               type: ArticleBlockType.CODE,
               code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
            },
            {
               id: '5',
               type: ArticleBlockType.TEXT,
               title: 'Заголовок этого блока',
               paragraphs: [
                  'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                  'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
               ],
            },
         ],
      },
      isLoading: false,
      error: undefined,
   },
};

const stateIsLoading: DeepPartial<StateSchema> = {
   articleDetails: {
      isLoading: true,
      error: undefined,
   },
};

const stateError: DeepPartial<StateSchema> = {
   articleDetails: {
      isLoading: false,
      error: 'error',
   },
};

export const Primary: Story = {
   args: {},
   decorators: [
      (Story) => (
         <StoreDecorator state={state}>
            <Story />
         </StoreDecorator>
      ),
   ],
};

export const PrimaryDark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <StoreDecorator state={state}>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryOrange: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <StoreDecorator state={state}>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryIsLoading: Story = {
   args: {},
   decorators: [
      (Story) => (
         <StoreDecorator state={stateIsLoading}>
            <Story />
         </StoreDecorator>
      ),
   ],
};

export const PrimaryIsLoadingDark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <StoreDecorator state={stateIsLoading}>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryIsLoadingOrange: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <StoreDecorator state={stateIsLoading}>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryError: Story = {
   args: {},
   decorators: [
      (Story) => (
         <StoreDecorator state={stateError}>
            <Story />
         </StoreDecorator>
      ),
   ],
};

export const PrimaryErrorark: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.DARK}>
            <StoreDecorator state={stateError}>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};

export const PrimaryErrorOrange: Story = {
   args: {},
   decorators: [
      (Story) => (
         <ThemeDecorator theme={Theme.ORANGE}>
            <StoreDecorator state={stateError}>
               <Story />
            </StoreDecorator>
         </ThemeDecorator>
      ),
   ],
};
