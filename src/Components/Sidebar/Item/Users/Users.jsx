import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userPhoto from '../../../../assets/images/238794638_3714455842112197_7316010721790369478_n.jpg'

class Users extends React.Component {
componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    });
}
onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
        this.props.setUsers(response.data.items);

    });
}
    render() {
  let pagesCount =Math.ceil(this.props.totalUsersCount / this.props.pageSize) ;
 let pages = [];
 for (let i = 1; i<= pagesCount;i++) {
     pages.push(i);
        }


    return  <div>
      <div>
          {pages.map (p  => {
             return  <span className={this.props.currentPage === p && s.selectedPage}
                           onClick={() => {this.onPageChanged(p);}
             }>{p} </span>
          })}
      </div>
        {
            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatarItem} src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="avatar"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                <span>
                        <div>{"u.country"}</div>
                        <div>{"u.city"}</div>
                    </span>
            </div>)
            }
            < /div>
    }

}

export default Users;