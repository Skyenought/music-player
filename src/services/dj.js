import ins from "./request";

// 获取最热主播榜
export async function getDjPopularList({limit}) {
    const res = await ins.get("/dj/toplist/popular", {
        params: {
            limit
        }
    });
    return res;
};

// 获取dj banner
export async function getDjBanner() {
    const res = await ins.get("/dj/banner");
    return res;
};

// 获取dj 分类
export async function getDjCat() {
    const res = await ins.get("/dj/catelist");
    return res;
};

// dj 推荐
export async function getDjRecommend() {
    const res = await ins.get("/dj/recommend");
    return res;
}

// 节目推荐
export async function getProgramRecommend() {
    const res = await ins.get("/program/recommend");
    return res;
}

// 节目排行榜
export async function getDjProgramToplist() {
    const res = await ins.get("/dj/program/toplist");
    return res;
};

// 获取推荐电台类型
export async function getRecommendCat() {
    const res = await ins.get("/dj/category/recommend");
    return res;
};

// 获取分类推荐的电台
export async function getRecommendByCat({type}) {
    const res = await ins.get("/dj/recommend/type", {
        params: {
            type
        }
    });
    return res;
};

// 获取热门电台列表
export async function getHotDjList({ limit, offset, cateId }) {
    const res = await ins.get('/dj/radio/hot', {
        params: {
            limit, offset, cateId
        }
    });
    return res;
}