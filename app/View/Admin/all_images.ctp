<script src="/yui/build/yui/yui-min.js"></script>
<script src="/global/js/gconfig-min.js"></script>
<form id = "uploadImage" method="POST" enctype="multipart/form-data" action="/adminapi/uploadImage">
	<table class="table table-bordered table-striped responsive-utilities">
    <tr><td>上传文件</td><td><input type="file" name="Filedata"/></td></tr>
    <tr><td><input type="submit"/> </td></tr>
	</table>
</form>
<form class="yui3-iuploader-form" action="/adminapi/uploadImage"></form>
<script>ZD.use('iuploader');</script>
<p>
<a target='_blank' class='btn btn-info' onclick="deleteImages()">删除选中图片</a>
<a target='_blank' class='btn btn-info' onclick="selectAll()">全选</a>
<a target='_blank' class='btn btn-info' onclick="dselectAll()">全部取消</a>
<a target='_blank' class='btn btn-info' onclick="rselectAll()">反选</a>
</p>
<table class="table table-bordered table-striped responsive-utilities">
	<thead>
	<tr>
		<th>选择图片</th>
		<th>图片地址</th>
		<th>图片预览</th>
	</tr>
	</thead>
	<tbody>
	<?php foreach ($files as $file): ?>
		<tr>
		<td><input type="checkbox" name="checkbox" value="<?php echo $file['id'];?>"></td>
		<td><a href='<?php echo $file['url']; ?>'><?php echo $file['filename']; ?></td>
		<td><img src='<?php echo $file['url']?>' style='max-height:100px'/></td>
		</tr>
	<?php endforeach; ?>
	</body>
</table>

<?php $this->Html->script('/admin/js/images.js', array('inline' => false)); ?>
<?php $this->Html->css('/admin/css/images.css',null, array('inline' => false)); ?>
