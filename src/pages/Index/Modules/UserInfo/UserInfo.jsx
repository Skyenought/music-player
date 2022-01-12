import React, { useState, useEffect} from 'react';
import style from "./userInfo.module.less";
import {connect} from "react-redux";
import { Button, Tag } from "@douyinfe/semi-ui";
import Login from '../../../../components/Login';
import { getUserDetail } from "../../../../services/apis";
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    user: state.user
});


function UserInfo(props) {
    const { user } = props;
    const [userInfo, setUserInfo] = useState(null); // 用户信息
    //获取用户信息
    useEffect(() => {
        (async () => {
            if(user) {
                const res = await getUserDetail({
                    uid: user.userId
                });
                if(res.code === 200) {
                    setUserInfo(res)
                }
            }
        })();
        return () => {
        }
    }, [user]);
    const [visible, setVisible] = useState(false);
    return (
        <div className={style["user-info"]}>
            {!userInfo ? <div className="user-login">
                <p className="desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <Button style={{
                    background: "#c20c0c",
                    color: "#fff"
                }} onClick={() => {
                    setVisible(true);
                }}>用户登录</Button>
            </div> : <div className="user-wrap">
                <div className="user-top">
                    <div className="img-wrap">
                        <Link to={'/user/home?uid=' + userInfo.profile.userId}><img src={userInfo.profile.avatarUrl} alt="" /></Link>
                    </div>
                    <div className="user-detail">
                        <Link to={'/user/home?uid=' + userInfo.profile.userId} className="name">{userInfo.profile.nickname}</Link>
                        <Link to="/level"><Tag>LV.{userInfo.level}</Tag></Link>
                        <Button>签到</Button>
                    </div>
                </div>
                <div className="user-nums">
                    <div className="box">
                        <span>{userInfo.profile.eventCount}</span>
                        <span>动态</span>
                    </div>
                    <div className="box">
                        <span>{userInfo.profile.follows}</span>
                        <span>关注</span>
                    </div>
                    <div className="box">
                        <span>{userInfo.profile.followeds}</span>
                        <span>粉丝</span>
                    </div>
                </div>
            </div> }
            <Login
                visible={visible}
                closeModal={() => {
                    setVisible(false);
                }}
            ></Login>
        </div>
    )
}

export default connect(mapStateToProps)(UserInfo);
