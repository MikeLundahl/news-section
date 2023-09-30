import Component from 'flarum/common/Component';
export default class NewsSection extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.articles = [];
    this.getArticles();
  }

  oncreate(vnode) {
    super.oncreate(vnode);
  }

  onupdate(vnode) {
    super.onupdate(vnode);
  }

  view() {
    return (
      <div className="NewsSection">
        <div className="NewsSection-container">
          <div className="NewsSection-title">Latest engine news:</div>{' '}
          {this.articles &&
            this.articles.map((item) => {
              return (
                <div className="NewsSection-item">
                  <a href={item.link} target="_blank">
                    {item.title}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  getArticles() {
    const url = app.forum.attribute('apiUrl') + '/newsEngine';
    m.request(url)
      .then((data) => {
        return (this.articles = data.items.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
