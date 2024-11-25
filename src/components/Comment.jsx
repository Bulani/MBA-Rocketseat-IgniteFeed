import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment () {
  return (

    <div className={styles.comment}>

      <Avatar hasBorder={false} src="https://github.com/bulani.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          
          <header>
            
            <div className={styles.authorAndTime}>
              <strong>João Víctor</strong>
              <time title="25 de Novembro às 09:07" dateTime="2024-11-25 09:07:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  )
}