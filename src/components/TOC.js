import React, {Component} from 'react';
class TOC extends Component {
    render(){
        console.log('TOC App render()');
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while( i < data.length ){
            lists.push(<li key={data[i].id}> <a 
                href={'/content/' +  data[i].id}
                data-id = {data[i].id}
                onClick = { e => {
                    this.props.onChangePage({id : e.target.dataset.id});
                    e.preventDefault();
                    console.log('e.target.dataset.id : ', e.target.dataset.id);
                }}>
                    {data[i].title}</a></li>);
            i++;
        }
      return (
          <nav>
            <ul>
                {lists}
            </ul>
          </nav>
      );
    }
  }
  export default TOC;