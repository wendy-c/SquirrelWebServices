import React, { PropTypes } from 'react';

const ArticleInfoFromFriendPresentational = (props) => {
  // props.image = props.image || './styles/img/flying-squirrel-grey.png'
  const image = props.image || './styles/img/flying-squirrel-grey.png';
  const divStyle = {
    backgroundImage: 'url(' + image + ')',
  };
  // const dummyphotoMike  = 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgXAAAAJGQ2MDIyODY3LTU2ODktNGRmMS1iNGVkLTY3YjQwM2VkMGEwMw.jpg';
  const dummyphotoJordan = ['https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/p320x320/13592162_10154405816284363_2728511714196473_n.jpg?oh=b76da1d3155fb55208c9bafddfbb4ac6&oe=586FBF09', 'Jordan'];
  const dummyphotoDamien = ['https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/1527139_10152267508116754_881470078_n.jpg?oh=afe1e63671a7fc44e949b5498df82696&oe=58A7340B', 'Damien'];
  const dummyphotoWendy = ['https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-1/p320x320/10847955_10152461729501892_744236920717164446_n.jpg?oh=fe855d398d9b9c90a7c0a64dbcd2e00b&oe=58AD662D', 'Wendy'];
  const dummyphotoArray = [dummyphotoJordan, dummyphotoWendy, dummyphotoDamien];
  // const random = Math.floor(Math.random() * 4);  

  return (
      <div className='article_from_friend_card shadowDepth1'>
        <div className='friend_article_image_block'>
          <div style={divStyle} className='friend_article_image'/>
        </div>
        <div className='friend_article_image_content'>
          <div className='friend_article_title'>
            <a href={props.url}>{props.title}</a>
          </div>
          <div className='friend_article_friend_image'>
            <p>Recommended by {dummyphotoJordan[1]}</p>
            <img src={dummyphotoJordan[0]} alt="" className="friend_article_friend_img circle responsive-img"/>
          </div>
        </div>
      </div>
    );
};

export default ArticleInfoFromFriendPresentational;
