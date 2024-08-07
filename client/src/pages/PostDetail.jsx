import React from "react";
import PostAuthor from "../components/PostAuthor";
import thumbnail from "../images/avatar1.webp";
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werver/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werver/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!!</h1>
        <div className="post-detail__thumbnail">
          <img src={thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          qui placeat autem, ipsam aliquam nisi tenetur commodi asperiores
          voluptatum quas beatae. Aspernatur suscipit ratione aperiam totam
          repellat voluptatum itaque voluptas nam sapiente ducimus voluptatibus,
          delectus cupiditate inventore esse quasi illum earum pariatur, cumque,
          enim natus! Voluptate assumenda soluta incidunt, exercitationem
          reprehenderit dolores perferendis enim maxime? Eligendi ipsa
          cupiditate exercitationem neque ad eos iusto! Facilis dolor porro
          molestias architecto consectetur optio sapiente, delectus deleniti
          esse numquam enim temporibus? Deleniti nam numquam quod maxime dolores
          incidunt temporibus quidem aspernatur eligendi eum, molestias delectus
          voluptates, doloribus inventore odio dolore ratione nisi praesentium
          tempore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          officia non ex recusandae! Est quam commodi repellat ab, in vero! Ad
          unde est sed voluptatem assumenda cumque explicabo! Necessitatibus
          voluptates labore cupiditate eveniet saepe iure sequi dolor
          perferendis nostrum natus? Temporibus porro labore et quae saepe,
          facere magnam nobis distinctio sequi. Odit ut doloremque perferendis
          vitae iusto saepe quia velit, non dolores molestiae sequi praesentium
          ipsum, architecto pariatur reprehenderit reiciendis error? Atque
          voluptatum a quae corrupti commodi possimus, illo optio tenetur
          placeat architecto libero! Reprehenderit ipsum dolor porro voluptatem!
          Dolor id earum cumque eligendi nemo error nisi accusamus quas nulla
          iste corporis, reiciendis beatae repudiandae dolorem consequatur
          repellendus doloremque hic corrupti! Magnam sint temporibus tempore
          esse soluta sed dolorum ea excepturi at cupiditate, pariatur optio
          accusantium ut odit reiciendis, commodi maiores minus ratione iusto.
          Quas aut nisi ut minima laboriosam commodi nam. Consectetur sit
          mollitia, in nemo minus alias. Cumque dolorem fugiat in veritatis!
          Delectus iure rem amet itaque distinctio sint consectetur! Dolor
          excepturi maxime ipsam illo. Libero impedit veritatis quibusdam odio
          eius hic laboriosam asperiores, assumenda nisi! Asperiores beatae quod
          sapiente, fugit cum sequi vitae cupiditate rem sunt consequatur, optio
          eius commodi illum aliquid quibusdam delectus magni, autem ipsa!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          soluta cupiditate delectus, magni eum odio excepturi repellendus quas
          aut. Atque reiciendis doloremque doloribus nam sapiente tempora ipsam
          reprehenderit ex sequi labore quae optio tempore consectetur dolore
          velit, quis obcaecati odio voluptate quaerat. Harum illo labore qui
          dicta vero, non rem doloribus dolorem accusantium assumenda eius,
          magnam error veritatis! Vero, laboriosam delectus sequi nemo eveniet
          animi quibusdam tenetur, officiis necessitatibus libero totam suscipit
          quis aperiam. Eligendi, commodi est. In saepe quibusdam possimus
          deserunt natus! Nam dolores ad sint facilis, voluptatum non eius fuga
          in ab similique, velit alias cumque consectetur? Nulla dolorum harum
          sit neque eum corrupti laudantium facere ipsa esse perferendis!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quia
          veritatis aliquid rem vero esse voluptate eos optio amet assumenda?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
