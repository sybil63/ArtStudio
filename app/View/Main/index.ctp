<link rel="stylesheet" href="/min?b=index/css&f=index-min.css" />
<script src="/min?f=index/js/config-min.js"></script>

<div class="g-bd clearfix">
	<article class="col-main">

	<!-- 焦点图 {{-->
	<section class="slide-show" id="J_slide_show">
	<div class="tab-content">
		<?php $i = 0;?>
		<?php foreach ($focusImages as $focusImage):?>
		<?php ++$i; ?>
		<?php if ($i == 1):  ?>
		<div class="tab-pannel">
		<?php else: ?>
		<div class="tab-pannel hidden">
		<?php endif;?>
		<a href="<?php echo $focusImage['link']; ?>"><img src="<?php echo $focusImage['src']; ?>" width="600" height="400" alt="<?php echo $focusImage['alt']; ?>" /></a>
		</div>
		<?php endforeach; ?>
	</div>
	<div class="tab-nav-con hidden">
		<div class="tab-nav-wrapper">
			<ul class="tab-nav clearfix">
			    <?php $j = 0;?>
                <?php foreach ($focusImages as $focusImage):?>
                <?php ++$j; ?>
				<li<?php if ($j == $i) { echo ' class="tab-nav-last"'; } ?>><a href="javascript:void(0);"></a></li>
				<?php endforeach;?>
			</ul>
			<div class="tab-nav-bar">
				<div class="tab-nav-bar-con">
					<p class="tab-nav-bar-night"></p>
					<p class="tab-nav-bar-light"></p>
				</div>
			</div>
			<div class="tab-nav-mask"></div>
		</div>
	</div>
	<a href="#" class="tab-btn tab-btn-prev hidden"></a>
	<a href="#" class="tab-btn tab-btn-next hidden"></a>
	</section>
	<!-- 焦点图 }}-->

	<!-- 了解周达画室 {{-->
	<section class="about-zd clearfix">
	<header>
	<hgroup>
	<h2>了解zhouda<br />studio</h2>
	<p>一所特别的美术机构</p>
	</hgroup>
	</header>
	<div>
		<p>北京周达画室是全国知名的美术培训中心，是正式注册的国家高考培训机构。自2008年创办以来，秉承“关注每一位学生”的教学宗旨和“注重基础”的教学理念，与地方高中和画室建立长期的合作关系，备受各界关注和好评。经过周达画室师生们的共同努力，向全国各高等院校美术专业输送了大批优秀学生，帮助学子考入理想的大学，在社会上赢得了良好的口碑。</p>
	</div>
	</section>
	<!-- 了解周达画室 }}-->

	<!-- 展示列表 {{-->
	<section class="show-category">
	<ul class="show-list clearfix">
		<?php $max_num = 4; ?>
		<li class="show-item show-item-first show-item-tall">
		<div class="show-con">
			<div class="show-image">
				<a href="/main/allGallery"><img src="/images/default/a72ce8a0d57f93ad5d005d9ac2dd5610-186-236.jpeg" alt="素描" /></a>
			</div>
			<h3>
				<strong>素描</strong><em>drawing</em>
			</h3>
			<ul>
				<?php $i = 0; $type='drawing'; ?>
				<?php foreach ($albums as $album): ?>
				<?php if ($i > 0 && $album['type'] != $type) break; ?>
				<?php if ($album['type'] != $type) continue; ?>
				<?php $i ++; if ($i > $max_num) break; ?>
				<li><a href="/main/allGallery#albumid=<?php echo $album['_id']; ?>"><b></b><?php echo $album['title'];?></a></li>
				<?php endforeach; ?>
			</ul>
		</div>
		</li>
		<li class="show-item show-item-tall">
        <div class="show-con">
            <div class="show-image">
                <a href="/main/allGallery"><img src="/images/default/f0ec08c78a31749715fa4383c95f5bbd-186-236.png" alt="设计" /></a>
            </div>
            <h3>
                <strong>设计</strong><em>design</em>
            </h3>
            <ul>
                <?php $i = 0; $type='graphic'; ?>
                <?php foreach ($albums as $album): ?>
                <?php if ($i > 0 && $album['type'] != $type) break; ?>
                <?php if ($album['type'] != $type) continue; ?>
                <?php $i ++; if ($i > $max_num) break; ?>
                <li><a href="/main/allGallery#albumid=<?php echo $album['_id']; ?>"><b></b><?php echo $album['title'];?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        </li>
		<li class="show-item show-item-blue show-item-last show-item-tall">
		<div class="show-con">
			<div class="show-image">
			<a href="/main/video"><img src="<?php echo $videoImage['imgUrl']; ?>" alt="<?php echo $videoImage['alt']; ?>" /></a>
			</div>
			<h3>
				<strong>视频</strong><em>video</em>
			</h3>
			<ul>
				<?php foreach ($videoTypes as $videoType): ?>
				<li><a href="/main/video?type=<?php echo $videoType['type'];?>"><b></b><?php echo $videoType['name']; ?></a></li>
				<?php endforeach; ?>
			</ul>
		</div>
		</li>
		<?php $max_num = 2; ?>
		<li class="show-item show-item-first">
        <div class="show-con">
            <div class="show-image">
                <a href="/main/allGallery"><img src="/index/img/show-sketch.png" alt="速写" /></a>
            </div>
            <h3>
                <strong>速写</strong>
                <em>sketch</em>
            </h3>
            <ul>
                <?php $i = 0; $type='sketch'; ?>
                <?php foreach ($albums as $album): ?>
                <?php if ($i > 0 && $album['type'] != $type) break; ?>
                <?php if ($album['type'] != $type) continue; ?>
                <?php $i ++; if ($i > $max_num) break; ?>
                <li><a href="/main/allGallery#albumid=<?php echo $album['_id']; ?>"><b></b><?php echo $album['title'];?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        </li>
		<li class="show-item">
        <div class="show-con">
            <div class="show-image">
                <a href="/main/allGallery"><img src="/index/img/show-color.png" alt="色彩" /></a>
            </div>
            <h3>
                <strong>色彩</strong><em>color</em>
            </h3>
            <ul>
                <?php $i = 0; $type='color'; ?>
                <?php foreach ($albums as $album): ?>
                <?php if ($i > 0 && $album['type'] != $type) break; ?>
                <?php if ($album['type'] != $type) continue; ?>
                <?php $i ++; if ($i > $max_num) break; ?>
                <li><a href="/main/allGallery#albumid=<?php echo $album['_id']; ?>"><b></b><?php echo $album['title'];?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        </li>
		<li class="show-item show-item-last">
        <div class="show-con">
            <div class="show-image">
                <a href="/main/allGallery"><img src="/images/default/d8e74e6a797e9194032831f48ece3838-186-236.png" alt="创作" /></a>
            </div>
            <h3>
                <strong>命题创作</strong><em>creation</em>
            </h3>
            <ul>
                <?php $i = 0; $type='creation'; ?>
                <?php foreach ($albums as $album): ?>
                <?php if ($i > 0 && $album['type'] != $type) break; ?>
                <?php if ($album['type'] != $type) continue; ?>
                <?php $i ++; if ($i > $max_num) break; ?>
                <li><a href="/main/allGallery#albumid=<?php echo $album['_id']; ?>"><b></b><?php echo $album['title'];?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        </li>
	</ul>
	</section>
	<!-- 展示列表 }}-->

	<!-- 黄金课程组合 }}-->
	<section class="class-group">
	<h2>黄金课程组合</h2>
	<div class="class-con">
		<div class="class-desc">
			<p>北京周达画室实行“食、宿、学”一体化封闭式的管理模式，解决了学生和家长的后顾之忧，使其能够充分利用有限的时间，集中精力投入到紧张的学习当中，从而实现最终梦想！拿到专业合格证只是迈进理想大学的一大步，从六月份开课到三月结束，我们一直有文化课辅导，在紧张专业训练后换换大脑，稳步提高文化，达到专业文化两不误！</p>
		</div>
		<div class="class-side">
			<img src="/index/img/class-side.png" alt="课程比例" />
		</div>
		<p><img src="/index/img/class-time.png" alt="课时详细" /></p>
	</div>
	</section>
	<!-- 黄金课程组合 {{-->

	<!-- 师资力量 {{-->
	<section class="teachers">
	<h2>师资力量</h2>
	<div class="teachers-con">
		<ul class="main-teachers clearfix">
			<?php  $i = 0; ?>
			<?php foreach ($mts as $mt): ?>
			<?php ++$i; ?>
			<?php if ($i % 2 ==0): ?>
			<li>
			<?php else: ?>
			<li class="teacher-even">
			<?php endif; ?>
			<a href="/main/teacher#<?php echo $mt['id']; ?>" class="teacher-link">
				<span class="teacher-image"><img src="<?php echo $mt['img']; ?>" alt="<?php echo $mt['name']; ?>" /></span>
				<strong class="teacher-name"><?php echo $mt['name']; ?></strong>
			</a>
			<p class="teacher-school"><?php echo $mt['school'];?></p>
			<p class="teacher-title"><?php echo $mt['title']; ?></p>
			</li>
			<?php endforeach; ?>
		</ul>
		<ul class="other-teachers clearfix">
			<?php foreach ($ots as $ot): ?>
			<li>
			<a href="/main/teacher#<?php echo $ot['id']; ?>" class="teacher-link">
				<span class="teacher-image"><img src="<?php echo $ot['img']; ?>" alt="<?php echo $ot['name']; ?>" /></span>
				<strong class="teacher-name"><?php echo $ot['name']; ?></strong>
				<em></em>
			</a>
			<p class="teacher-school"><?php echo $ot['school']; ?></p>
			<p class="teacher-title"><?php echo $ot['title']; ?></p>
			</li>
			<?php endforeach; ?>
		</ul>
	</div>
	</section>
	<!-- 师资力量 }}-->

	<!-- 教学环境 {{-->
	<section class="environment">
	<h2>教学环境</h2>
	<div class="environment-con">
		<ul class="clearfix">
			<li class="env-image env-long">
			<a href="/main/studioEnv"><img src="/index/img/env1.png" alt="周达画室" /></a>
			</li>
			<li class="env-desc">
			<strong>高效</strong>
			</li>
			<li class="env-image">
			<a href="/main/studioEnv"><img src="/index/img/env2.png" alt="周达画室" /></a>
			</li>
			<li class="env-image">
			<a href="/main/studioEnv"><img src="/index/img/env3.png" alt="周达画室" /></a>
			</li>
			<li class="env-image env-wide">
			<a href="/main/studioEnv"><img src="/index/img/env4.png" alt="周达画室" /></a>
			</li>
			<li class="env-desc env-more">
			<a href="/main/studioEnv">
				<strong>了解更多</strong><em>more<b></b></em>
			</a>
			</li>
			<li class="env-desc">
			<strong>责任</strong>
			</li>
			<li class="env-image">
			<a href="/main/studioEnv"><img src="/index/img/env5.png" alt="周达画室" /></a>
			</li>
			<li class="env-desc">
			<strong>沟通</strong>
			</li>
			<li class="env-image">
			<a href="/main/studioEnv"><img src="/index/img/env6.png" alt="周达画室" /></a>
			</li>
		</ul>
	</div>
	</section>
	<!-- 教学环境 }}-->

	<!-- 出版书籍 {{-->
	<section class="books">
	<h2>出版书籍</h2>
	<div class="books-con">
		<ul class="clearfix">
			<li><span><img src="/images/default/fe3a4d2d761dfe63d14e60caddb7d979-127-203.jpeg" alt="素描头像" /></span></li>
			<li><span><img src="/images/default/b9761516b933a9f4e22d9c87c6b0a664-127-203.jpeg" alt="色彩静物" /></span></li>
			<li><span><img src="/images/default/4421102c417520b181b2ece82b392da7-127-203.jpeg" alt="素描静物" /></span></li>
			<li><span><img src="/images/default/20e417be78160c268382f491aa257e0e-127-203.jpeg" alt="美术报考指南" /></span></li>
			<li><span><img src="/images/default/8e4982d808776ae683726665967bb74b-127-203.png" alt="教学对话" /></span></li>
			<li><span><img src="/images/default/a24a47310b4d8818f50fb62659f20f43-127-203.png" alt="名师堂" /></span></li>
			<li><span><img src="/images/default/98339187014c403390a27839f956e741-127-203.jpeg" alt="教学对话" /></span></li>
			<li><span><img src="/images/default/8b3b099d66ac61a1c9d583d70df4a555-127-203.jpeg" alt="名师堂" /></span></li>
			<li><span><img src="/images/default/4a89cb1560b79e2481bc87b2ca7b3ed6-127-203.jpeg" alt="教学对话" /></span></li>
			<li><span><img src="/images/default/06d4a10193d980d052155c9b15b7132d-127-203.jpeg" alt="名师堂" /></span></li>
		</ul>
	</div>
	</section>
	<!-- 出版书籍 }}-->

	<!-- 光荣榜 {{-->
	<section class="hall">
	<h2>光荣榜</h2>
	<div class="hall-con">
		<div class="hall-list">
			<ul>
				<?php foreach ($honours as $honour):  ?>
				<?php 
					$schools = preg_split('/\s+/', trim($honour['school'])); 
					$temp = null;
					if (strlen($schools[0]) <= 3) {
						$temp = join('', $schools);
						$schools = array();
						$schools[] = $temp;
					}
				?>
				<li>祝贺北京周达画室学员<?php echo $honour['name'];?>同学专业通过<?php echo $schools[0];?></li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="hall-mask-up"></div>
		<div class="hall-mask"></div>
	</div>
	<a href="/main/honour" class="hall-more">more</a>
	</section>
	<!-- 光荣榜 }}-->

	<!-- 联系我们 }}-->
	<section class="contact">
	<h2>联系我们</h2>
	<div class="contact-con clearfix">
		<div class="contact-map">
			<a href="http://api.map.baidu.com/geocoder?address=北京周达画室&output=html"><img src="http://api.map.baidu.com/staticimage?width=258&height=178&zoom=18&center=北京周达画室" alt="北京周达画室" /></a>
			<a class="contact-click" href="http://api.map.baidu.com/geocoder?address=北京周达画室&output=html">点击查看大图</a>
		</div>
		<div class="contact-info">
			<p class="contact-phone">13439931362 / 13333266696<br />13661027858</p>
			<p class="contact-address">北京市通州区宋庄小堡文化广场对面<br />(离中央美术学院燕郊校区仅10分钟车程)</p>
			<p class="contact-qq">278953129</p>
			<p class="contact-path clearfix">
			<a href="/main/signup">乘车路线<b></b></a>
			</p>
		</div>
	</div>
	</section>
	<!-- 联系我们 {{-->

	</article>
	<aside class="col-aside">

	<!-- 微博秀 {{-->
	<section class="weibo-show">
	<iframe width="226" height="400" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=226&height=400&fansRow=2&ptype=1&speed=0&skin=1&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=2942681411&verifier=599ecf1e&dpc=1"></iframe>
	</section>
	<!-- 微博秀 }}-->

	<!-- 开课时间 {{-->
	<section class="quick-nav opening-time">
	<h3>
		<em>opening time</em>
		<strong>周达画室开课时间</strong>
	</h3>
	<ul>
		<?php foreach ($courseInfos as $courseInfo): ?>
		<li><a href="/main/article?id=<?php echo $courseInfo['_id']; ?>"><b></b><?php echo $courseInfo['title']; ?></a></li>
		<?php endforeach; ?>
	</ul>
	</section>
	<!-- 开课时间 }}-->

	<!-- 报名须知及注意事项 {{-->
	<section class="quick-nav guidance">
	<h3>
		<em>request&amp;guidance</em>
		<strong>报名须知及注意事项</strong>
	</h3>
	<ul>
		<?php foreach ($applyInfos as $applyInfo): ?>
		<li><a href="/main/article?id=<?php echo $applyInfo['_id']; ?>"><b></b><?php echo $applyInfo['title']; ?></a></li>
		<?php endforeach; ?>
	</ul>
	</section>
	<!-- 报名须知及注意事项 }}-->

	<!-- 创始人 {{-->
	<section class="founder">
	<header>
	<hgroup>
	<h3>周达</h3>
	<p>教学总监/画室创始人</p>
	</hgroup>
	</header>
	<a class="founder-image" href="/main/zdIntro"></a>
	<p class="founder-desc">2007年考入中央美院。2008年进入中央美院油画系三工作室学习，在校期间多幅作品被留校珍藏。</p>
	<a href="/main/zdIntro" class="founder-works">作品欣赏<b></b></a>
	</section>
	<!-- 创始人 }}-->

	<!-- 画室新闻 {{-->
	<section>
	<ul class="news">
		<?php  $i = 0; ?>
		<?php foreach ($newses as $news): ?>
		<?php  ++$i; if ($i > 6) break; ?>
		<li>
		<a href="/main/article?id=<?php echo $news['articleId']; ?>" class="news-image">
			<img src="<?php  if (isset($news['image'])) {echo $base_url, $news['image'];} else { echo "#";} ?>" alt="画室新闻" />
			<strong class="news-title"><?php echo $news['title']; ?></strong>
		</a>
		<p class="news-date"><?php echo date('Y-m-d', $news['date']->sec); ?></p>
		<p class="news-desc"><?php echo $news['summary']; ?></p>
		<div class="news-more clearfix">
			<a href="/main/article?id=<?php echo $news['articleId']?>">more<b></b></a>
		</div>
		</li>
		<?php  endforeach; ?>
	</ul>
	</section>
	<!-- 画室新闻 }}-->

	</aside>
</div>
