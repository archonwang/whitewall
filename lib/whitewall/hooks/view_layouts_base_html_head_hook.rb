module Whitewall
  module Hooks
    class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
      def view_layouts_base_html_head(context={})
		  content = stylesheet_link_tag('application.css', :plugin => 'whitewall')
      end
    end
  end
end