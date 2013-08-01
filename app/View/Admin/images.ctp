<form method="POST" enctype="multipart/form-data" action="/admin/uploadImage">
	<table class="table table-bordered table-striped responsive-utilities">
    <tr><td>上传文件</td><td><input type="file" name="pics[]" multiple/></td></tr>
    <tr><td><input type="submit"/> </td></tr>
	</table>
</form>


<table class="table table-bordered table-striped responsive-utilities">
	<thead>
	<tr>
		<th>图片地址</th>
		<th>图片预览</th>
	</tr>
	</thead>
	<tbody>
	<?php foreach ($files as $file): ?>
		<tr>
		<td><a href='<?php echo $file['url']; ?>'><?php echo $file['filename']; ?></td>
		<td><img src='<?php echo $file['url']?>' style='max-height:100px'/></td>
		</tr>
	<?php endforeach; ?>
	</body>
</table>