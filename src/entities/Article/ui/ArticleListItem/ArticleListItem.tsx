import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg?react';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
   ArticleView,
   ArticleBlockType,
} from '../../model/consts/constsArticle';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemProps {
   className?: string;
   article: Article;
   view: ArticleView;
   target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
   const { className, article, view, target } = props;
   const { t } = useTranslation();

   const types = <Text text={article.type.join(', ')} className={cls.types} />;
   const views = (
      <>
         <Text text={String(article.views)} className={cls.views} />
         <Icon Svg={EyeIcon} />
      </>
   );

   if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
         (block) => block.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;

      return (
         <div className={classNames('', {}, [className, cls[view]])}>
            <Card className={cls.card} data-testid="ArticleListItem">
               <div className={cls.header}>
                  <Avatar size={30} src={article.user.avatar} />
                  <Text text={article.user.username} className={cls.username} />
                  <Text text={article.createdAt} className={cls.date} />
               </div>
               <Text title={article.title} className={cls.title} />
               {types}
               <AppImage
                  src={article.img}
                  className={cls.img}
                  alt={article.title}
                  fallback={<Skeleton width="100%" height={250} />}
               />
               {textBlock && (
                  <ArticleTextBlockComponent
                     block={textBlock}
                     className={cls.textBlock}
                  />
               )}
               <div className={cls.footer}>
                  <AppLink
                     to={getRouteArticleDetails(article.id)}
                     target={target}
                  >
                     <Button theme={ButtonTheme.OUTLINE}>
                        {t('Read more')}
                     </Button>
                  </AppLink>

                  {views}
               </div>
            </Card>
         </div>
      );
   }

   return (
      <AppLink
         to={getRouteArticleDetails(article.id)}
         className={classNames('', {}, [className, cls[view]])}
         target={target}
      >
         <Card className={cls.card} data-testid="ArticleListItem">
            <div className={cls.imageWrapper}>
               <AppImage
                  src={article.img}
                  className={cls.img}
                  alt={article.title}
                  fallback={<Skeleton width="200" height={200} />}
               />
               <Text text={article.createdAt} className={cls.date} />
            </div>
            <div className={cls.infoWrapper}>
               {types}
               {views}
            </div>
            <Text text={article.title} className={cls.title} />
         </Card>
      </AppLink>
   );
});
