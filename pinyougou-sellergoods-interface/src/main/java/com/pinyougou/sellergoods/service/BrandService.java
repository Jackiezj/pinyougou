package com.pinyougou.sellergoods.service;
import java.util.List;
import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

/**
 * 品牌服务层接口
 * @author Administrator
 *
 */
public interface BrandService {
    /**
     * 返回全部列表
     * @return
     */
    public List<TbBrand> findAll();

    /**
     * 分页返回全部列表
     * @return
     */
    public PageResult findPage(int pageNum, int pageSize);

    public void add(TbBrand brand);
}

