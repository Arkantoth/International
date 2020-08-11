function langue_change(lang)
{
	if(lang=="fr")
	{
		$(":lang(en)").hide();
		$(":lang(fr)").show();
	}
	else
	{
		$(":lang(en)").show();
		$(":lang(fr)").hide();
	}	
}