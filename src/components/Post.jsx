import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
  return (

    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar src="https://github.com/bulani.png" />
          <div className={styles.authorInfo}>
            <strong>João Víctor F. Miranda</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="23 de Novembro às 12:00" dateTime="2024-11-23 12:00:00">Públicado há 1h</time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a target="_blank" href="https://jvfm.com.br/#portfolio">jvfm.com.br</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe um comentário</strong>
        
        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>

  );
}